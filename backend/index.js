require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/authRoutes");

const authMiddleware = require("./middleware/authMiddleware");

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

app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      userId: req.user.id,
    });

    res.json(allHoldings);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching holdings");
  }
});

/* =========================
   GET POSITIONS
========================= */

app.get("/allPositions", authMiddleware, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({
      userId: req.user.id,
    });

    res.json(allPositions);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching positions");
  }
});

/* =========================
   GET ORDERS
========================= */

app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({
      userId: req.user.id,
    });

    res.json(allOrders);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching orders");
  }
});

/* =========================
   NEW ORDER
========================= */

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    /* =========================
         SAVE ORDER
      ========================= */

    const newOrder = new OrdersModel({
      userId: req.user.id,

      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    /* =========================
         HOLDINGS LOGIC
      ========================= */

    let holding = await HoldingsModel.findOne({
      userId: req.user.id,
      name,
    });

    // BUY
    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;

        const totalCost = holding.avg * holding.qty + price * qty;

        holding.qty = totalQty;

        holding.avg = totalCost / totalQty;

        holding.price = price;

        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          userId: req.user.id,

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
          await HoldingsModel.deleteOne({
            userId: req.user.id,
            name,
          });
        } else {
          holding.price = price;

          await holding.save();
        }
      }
    }

    /* =========================
         POSITIONS LOGIC
      ========================= */

    let position = await PositionsModel.findOne({
      userId: req.user.id,
      name,
    });

    // BUY POSITION
    if (mode === "BUY") {
      if (position) {
        position.qty += qty;

        position.price = price;

        await position.save();
      } else {
        const newPosition = new PositionsModel({
          userId: req.user.id,

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
          await PositionsModel.deleteOne({
            userId: req.user.id,
            name,
          });
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
   CONNECT DB
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
