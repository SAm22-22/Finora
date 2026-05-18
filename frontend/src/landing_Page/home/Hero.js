import React from "react";

import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container text-center py-5">

      {/* Image */}
      <img
        src="media/images/homeHero.png"
        alt="Trading dashboard preview"
        className="img-fluid mb-5"
      />

      {/* Heading */}
      <h1
        className="fw-bold mb-3"
        style={{
          fontSize: "clamp(26px, 5vw, 44px)",
        }}
      >
        Invest in everything
      </h1>

      {/* Subtext */}
      <p
        className="text-muted mx-auto mb-4"
        style={{
          maxWidth: "600px",
          fontSize: "clamp(12px, 2vw, 16px)",
        }}
      >
        Online platform to invest in
        stocks, derivatives, mutual
        funds, and more
      </p>

      {/* Button */}
      <button
        className="btn btn-primary px-4 py-2 rounded-3"
        style={{
          fontSize: "clamp(12px, 2vw, 16px)",
        }}
        onClick={handleSignup}
      >
        Sign up now
      </button>

    </div>
  );
}

export default Hero;