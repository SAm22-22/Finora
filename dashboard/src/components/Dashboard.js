import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

  const params = new URLSearchParams(
    window.location.search
  );

  const tokenFromURL =
    params.get("token");

  const usernameFromURL =
    params.get("username");

  // SAVE TOKEN
  if (tokenFromURL) {
    localStorage.setItem(
      "token",
      tokenFromURL
    );
  }

  // SAVE USER
  if (usernameFromURL) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: usernameFromURL,
      })
    );
  }

  // CLEAN URL
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  );

  // CHECK TOKEN
  const token =
    localStorage.getItem("token");

  // PROTECT ROUTE
  if (!token) {

    window.location.href =
      "http://localhost:3000/login";

    return null;
  }

  return (
    <GeneralContextProvider>

      <div className="dashboard-container">

        <WatchList />

        <div className="content">

          <Routes>
            <Route
              index
              element={<Summary />}
            />

            <Route
              path="orders"
              element={<Orders />}
            />

            <Route
              path="holdings"
              element={<Holdings />}
            />

            <Route
              path="positions"
              element={<Positions />}
            />

            <Route
              path="funds"
              element={<Funds />}
            />

            <Route
              path="apps"
              element={<Apps />}
            />

          </Routes>

        </div>

      </div>

    </GeneralContextProvider>
  );
};

export default Dashboard;