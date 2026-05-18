import React from "react";

import { useNavigate } from "react-router-dom";

function OpenAccount() {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container text-center py-5">

      <h1 className="fw-bold mb-3 mt-5">
        Open a Finora account
      </h1>

      <p className="text-muted mx-auto mb-4">
        Modern platforms and apps,
        ₹0 investments, and flat ₹20
        intraday and F&O trades.
      </p>

      <button
        className="btn btn-primary px-4 py-2 rounded-3"
        onClick={handleSignup}
      >
        Sign up now
      </button>

    </div>
  );
}

export default OpenAccount;