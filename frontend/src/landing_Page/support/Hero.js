import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="support-hero">

      {/* Top */}
      <div className="support-wrapper">
        <h4>Support Portal</h4>
      </div>

      {/* Main */}
      <div className="hero-container">

        {/* Left */}
        <div className="hero-left">
          <h1>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input placeholder="Eg. how do I activate F&O" />

          <div className="quick-links">
            <Link to="/">Track account opening</Link>
            <Link to="/">Track segment activation</Link>
            <Link to="/">Intraday margins</Link>
            <Link to="/">Kite user manual</Link>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">

          {/* ✅ Track Tickets ABOVE Featured */}
          <div className="track-ticket">
            <Link to="/tickets">Track Tickets</Link>
          </div>

          <h4>Featured</h4>

          <ol>
            <li>
              <Link to="/">Current Takeovers and Delisting - January 2024</Link>
            </li>
            <li>
              <Link to="/">Latest Intraday leverages - MIS & CO</Link>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;