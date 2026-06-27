import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((stock) => stock.name);

const WatchList = ({ closeDrawer }) => {
  const graphData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly"
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            key={`${stock.name}-${index}`}
            stock={stock}
            closeDrawer={closeDrawer}
          />
        ))}
      </ul>

      <DoughnutChart data={graphData} />
    </div>
  );
};

export default WatchList;

// ===================================================

const WatchListItem = ({ stock, closeDrawer }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const isMobile = window.innerWidth <= 768;

  return (
    <li
      onMouseEnter={() => {
        if (!isMobile) setShowWatchlistAction(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setShowWatchlistAction(false);
      }}
      onClick={() => {
        if (isMobile) {
          setShowWatchlistAction((prev) => !prev);
        }
      }}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ₹{stock.price}
          </span>
        </div>
      </div>

      {showWatchlistAction && (
        <WatchlistAction
          uid={stock.name}
          closeDrawer={closeDrawer}
        />
      )}
    </li>
  );
};

// ===================================================

const WatchlistAction = ({ uid, closeDrawer }) => {
  const { openBuyWindow, openSellWindow } =
    useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={(e) => {
              e.stopPropagation();

              openBuyWindow(uid);

              if (window.innerWidth <= 768 && closeDrawer) {
                setTimeout(() => {
                  closeDrawer();
                }, 100);
              }
            }}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onClick={(e) => {
              e.stopPropagation();

              openSellWindow(uid);

              if (window.innerWidth <= 768 && closeDrawer) {
                setTimeout(() => {
                  closeDrawer();
                }, 100);
              }
            }}
          >
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="action"
            onClick={(e) => e.stopPropagation()}
          >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="action"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};