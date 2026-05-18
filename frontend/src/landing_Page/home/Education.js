import React from "react";


function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        {/* Left Image */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src="media/images/education.svg"
            alt="Stock market education illustration"
            className="img-fluid"
          />
        </div>

        {/* Spacer (desktop only) */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="/varsity" className="text-decoration-none fw-semibold">
            Varsity{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="/trading-qa" className="text-decoration-none fw-semibold">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;