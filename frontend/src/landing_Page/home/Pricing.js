import React from "react";

function Pricing() {
  return (
    <div className="container py-5 px-3">
      <div className="row align-items-center gy-5">

        {/* Left Section */}
        <div className="col-12 col-lg-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="/pricing" className="text-decoration-none fw-semibold">
            See pricing{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer (ONLY for desktop balance, hidden on mobile) */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Right Section */}
        <div className="col-12 col-lg-6">
          <div className="row text-center gx-4 gy-4">

            {/* Card 1 */}
            <div className="col-12 col-sm-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="text-muted mb-0">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6">
              <div className="border rounded p-4 h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="text-muted mb-0">
                  Intraday and F&O
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;