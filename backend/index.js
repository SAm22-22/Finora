require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;
  
const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(bodyParser.json());

/* =========================
   AUTH ROUTES
========================= */

app.use("/api/auth", authRoutes);

/* =========================
   GET HOLDINGS
========================= */

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching holdings");
  }
});

/* =========================
   GET POSITIONS
========================= */

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching positions");
  }
});

/* =========================
   GET ORDERS
========================= */

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching orders");
  }
});

/* =========================
   NEW ORDER
========================= */

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    /* =========================
       SAVE ORDER
    ========================= */

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    /* =========================
       HOLDINGS LOGIC
    ========================= */

    let holding = await HoldingsModel.findOne({ name });

    // BUY
    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;

        const totalCost =
          holding.avg * holding.qty + price * qty;

        holding.qty = totalQty;
        holding.avg = totalCost / totalQty;
        holding.price = price;

        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }

    // SELL
    if (mode === "SELL") {
      if (holding) {
        holding.qty -= qty;

        if (holding.qty <= 0) {
          await HoldingsModel.deleteOne({ name });
        } else {
          holding.price = price;
          await holding.save();
        }
      }
    }

    /* =========================
       POSITIONS LOGIC
    ========================= */

    let position = await PositionsModel.findOne({ name });

    // BUY POSITION
    if (mode === "BUY") {
      if (position) {
        position.qty += qty;
        position.price = price;

        await position.save();
      } else {
        const newPosition = new PositionsModel({
          product: "CNC",
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
          isLoss: false,
        });

        await newPosition.save();
      }
    }

    // SELL POSITION
    if (mode === "SELL") {
      if (position) {
        position.qty -= qty;

        if (position.qty <= 0) {
          await PositionsModel.deleteOne({ name });
        } else {
          position.price = price;
          await position.save();
        }
      }
    }

    res.status(200).json({
      success: true,
      message: "Order processed successfully!",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* =========================
   CONNECT DB & START SERVER
========================= */

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });