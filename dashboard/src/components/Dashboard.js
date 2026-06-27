import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import MobileHeader from "./MobileHeader";
import MobileDrawer from "./MobileDrawer";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [watchlistOpen, setWatchlistOpen] = useState(false);

  const params = new URLSearchParams(window.location.search);

  const tokenFromURL = params.get("token");
  const usernameFromURL = params.get("username");

  if (tokenFromURL) {
    localStorage.setItem("token", tokenFromURL);
  }

  if (usernameFromURL) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: usernameFromURL,
      })
    );
  }

  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  );

  return (
    <GeneralContextProvider>

      {/* MOBILE HEADER */}
      <MobileHeader
        openDrawer={() => setDrawerOpen(true)}
        openProfile={() => {}}
      />

      {/* MOBILE NAVIGATION DRAWER */}
      <MobileDrawer
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        openWatchlist={() => setWatchlistOpen(true)}
      />

      {/* WATCHLIST DRAWER */}
      <>
        {watchlistOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setWatchlistOpen(false)}
          />
        )}

        <div
          className={`watchlist-drawer ${
            watchlistOpen ? "open" : ""
          }`}
        >
          <div className="watchlist-header">
            <h3>Watchlist</h3>

            <button
              className="drawer-close"
              onClick={() => setWatchlistOpen(false)}
            >
              ✕
            </button>
          </div>

          <WatchList
            closeDrawer={() => setWatchlistOpen(false)}
          />
        </div>
      </>

      <div className="dashboard-container">

        {/* DESKTOP WATCHLIST */}
        <div className="desktop-watchlist">
          <WatchList />
        </div>

        {/* MAIN CONTENT */}
        <div className="content">
          <Routes>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Routes>
        </div>

      </div>

    </GeneralContextProvider>
  );
};

export default Dashboard;