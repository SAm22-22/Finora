import React from "react";
import { Link } from "react-router-dom";

// 🔹 All Data (Top + Bottom Combined)
const ticketData = [
  {
    title: "Account Opening",
    icon: "fa fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa fa-user",
    links: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Trading & Platforms",
    icon: "fa fa-bar-chart",
    links: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
  {
    title: "Funds",
    icon: "fa fa-credit-card",
    links: ["Adding Funds", "Fund Withdrawal", "eMandates"],
  },
  {
    title: "Console",
    icon: " fa-regular fa-circle",
    links: ["Reports", "Ledger", "Portfolio"],
  },
  {
    title: "Coin",
    icon: "fa-solid fa-cent-sign",
    links: [
      "Understanding Mutual Funds",
      "About Coin",
      "Buying and Selling through Coin",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <h1 className="fs-3 mb-5">To create a ticket, select a relevant topic</h1>

      {/* Grid */}
      <div className="row">
        {ticketData.map((section, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
            {/* Title + Icon */}
            <h5 className="mb-3 d-flex align-items-center">
              <i className={`${section.icon} me-2 text-dark`}></i>
              {section.title}
            </h5>

            {/* Links */}
            <ul className="list-unstyled">
              {section.links.map((link, i) => (
                <li key={i} className="mb-2">
                  <Link
                    to="/"
                    className="text-decoration-none"
                    style={{ color: "#387ed1", fontSize: "14px" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
