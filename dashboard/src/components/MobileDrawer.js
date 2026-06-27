import React from "react";
import { Link } from "react-router-dom";

const MobileDrawer = ({ isOpen, closeDrawer, openWatchlist }) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      {isOpen && <div className="mobile-overlay" onClick={closeDrawer}></div>}

      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="mobile-drawer-header">
          <div className="mobile-user">
            <div className="mobile-avatar">
              {user?.username ? user.username.slice(0, 2).toUpperCase() : "ZU"}
            </div>

            <div>
              <h4>{user?.username || "User"}</h4>
              <p>Welcome Back 👋</p>
            </div>
          </div>

          <button className="drawer-close" onClick={closeDrawer}>
            ✕
          </button>
        </div>

        <hr />

        {/* Navigation */}

        <Link to="/" className="mobile-link" onClick={closeDrawer}>
          📊 Dashboard
        </Link>

        <Link to="/orders" className="mobile-link" onClick={closeDrawer}>
          📋 Orders
        </Link>

        <Link to="/holdings" className="mobile-link" onClick={closeDrawer}>
          💼 Holdings
        </Link>

        <Link to="/positions" className="mobile-link" onClick={closeDrawer}>
          📈 Positions
        </Link>

        <Link to="/funds" className="mobile-link" onClick={closeDrawer}>
          💰 Funds
        </Link>

        <Link to="/apps" className="mobile-link" onClick={closeDrawer}>
          📱 Apps
        </Link>

        <hr />

        <button
          className="mobile-link watchlist-btn"
          onClick={() => {
            closeDrawer();

            if (openWatchlist) {
              openWatchlist();
            }
          }}
        >
          ⭐ Watchlist
        </button>
      </div>
    </>
  );
};

export default MobileDrawer;