import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Route change hote hi mobile menu close ho jayega
  useEffect(() => {
    const navbar = document.getElementById("navbarSupportedContent");

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom py-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "95px" }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;