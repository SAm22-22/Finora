import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  const { refreshFlag } = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:8080/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHoldings(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHoldings();
  }, [refreshFlag]);

  const user = JSON.parse(localStorage.getItem("user"));

  // calculations
  const investment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0,
  );

  const currentValue = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0,
  );

  const pnl = currentValue - investment;

  const pnlPercent = investment > 0 ? ((pnl / investment) * 100).toFixed(2) : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{currentValue.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>

            <p>
              Opening balance <span>{investment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)}

              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment <span>{investment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
