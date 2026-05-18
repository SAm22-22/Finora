import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [data, setData] = useState([]);

  const { refreshFlag } =
    useContext(GeneralContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8080/allHoldings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [refreshFlag]);

  // GRAPH LABELS
  const labels = data.map(
    (stock) => stock.name
  );

  // GRAPH DATA
  const graphData = {
    labels,

    datasets: [
      {
        label: "Stock Price",

        data: data.map(
          (stock) => stock.price || stock.avg
        ),

        backgroundColor:
          "rgba(53, 162, 235, 0.6)",

        borderColor:
          "rgba(53, 162, 235, 1)",

        borderWidth: 1,
      },
    ],
  };

  // SUMMARY CALCULATIONS
  const totalInvestment = data.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = data.reduce(
    (acc, stock) =>
      acc +
      (stock.price || stock.avg) * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  return (
    <>
      <h3 className="title">
        Holdings ({data.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {data.map((stock, index) => {
              const currentPrice =
                stock.price || stock.avg;

              const currValue =
                currentPrice * stock.qty;

              const isProfit =
                currValue -
                  stock.avg * stock.qty >=
                0;

              const profClass = isProfit
                ? "profit"
                : "loss";

              const dayClass = stock.isLoss
                ? "loss"
                : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>
                    ₹{stock.avg.toFixed(2)}
                  </td>

                  <td>
                    ₹
                    {currentPrice.toFixed(2)}
                  </td>

                  <td>
                    ₹{currValue.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    ₹
                    {(
                      currValue -
                      stock.avg * stock.qty
                    ).toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}
      <div className="row holdings-summary">
        <div className="col">
          <h5>
            ₹
            {totalInvestment.toFixed(2)}
          </h5>

          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>

          <p>Current Value</p>
        </div>

        <div className="col">
          <h5
            className={
              pnl >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹{pnl.toFixed(2)}
          </h5>

          <p>P&L</p>
        </div>
      </div>

      {/* GRAPH */}
      <VerticalGraph data={graphData} />
    </>
  );
};

export default Holdings;