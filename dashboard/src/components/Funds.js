import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState({});

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/funds"
        );

        setFunds(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFunds();
  }, []);

  return (
    <>
      <div className="funds">
        <p>
          Instant, zero-cost fund transfers with UPI
        </p>

        <Link className="btn btn-green">
          Add funds
        </Link>

        <Link className="btn btn-blue">
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>

              <p className="imp colored">
                ₹{funds.availableMargin}
              </p>
            </div>

            <div className="data">
              <p>Used margin</p>

              <p className="imp">
                ₹{funds.usedMargin}
              </p>
            </div>

            <div className="data">
              <p>Available cash</p>

              <p className="imp">
                ₹{funds.availableCash}
              </p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>

              <p>
                ₹{funds.openingBalance}
              </p>
            </div>

            <div className="data">
              <p>Payin</p>

              <p>
                ₹{funds.payin}
              </p>
            </div>

            <div className="data">
              <p>SPAN</p>

              <p>0.00</p>
            </div>

            <div className="data">
              <p>Delivery margin</p>

              <p>0.00</p>
            </div>

            <div className="data">
              <p>Exposure</p>

              <p>0.00</p>
            </div>

            <div className="data">
              <p>Options premium</p>

              <p>0.00</p>
            </div>

            <hr />

            <div className="data">
              <p>Collateral (Liquid funds)</p>

              <p>0.00</p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>

              <p>0.00</p>
            </div>

            <div className="data">
              <p>Total Collateral</p>

              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>
              You don't have a commodity account
            </p>

            <Link className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;