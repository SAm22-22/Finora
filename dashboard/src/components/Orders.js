import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";
import "./Order.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { refreshFlag } = useContext(GeneralContext);

 const fetchOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:8080/allOrders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(res.data); 
  } catch (err) {
    console.log("ORDER ERROR:", err.response?.data || err.message);
  }
};

  useEffect(() => {
    fetchOrders();
  }, [refreshFlag]);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td
                  style={{
                    color: order.mode === "BUY" ? "green" : "red",
                  }}
                >
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
