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

const WatchList = () => {
  // GRAPH DATA
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
      {/* SEARCH */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly"
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>
      </div>

      {/* WATCHLIST */}
      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={`${stock.name}-${index}`}
            />
          );
        })}
      </ul>

      {/* GRAPH */}
      <DoughnutChart data={graphData} />
    </div>
  );
};

export default WatchList;

// WATCHLIST ITEM
const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistAction(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistAction(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <WatchlistAction uid={stock.name} />
      )}
    </li>
  );
};

// ACTIONS
const WatchlistAction = ({ uid }) => {
  const { openBuyWindow, openSellWindow } =
    useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        {/* BUY */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={() => openBuyWindow(uid)}
          >
            Buy
          </button>
        </Tooltip>

        {/* SELL */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onClick={() => openSellWindow(uid)}
          >
            Sell
          </button>
        </Tooltip>

        {/* ANALYTICS */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        {/* MORE */}
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};