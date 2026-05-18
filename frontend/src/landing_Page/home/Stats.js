import React from "react";


function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        {/* Left Section */}
        <div className="col-12 col-lg-5">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Finora with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace.
          </p>

          <h2 className="fs-5">The Finora universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem with 30+ fintech startups.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            We actively help you do better with your money.
          </p>
        </div>

        {/* Spacer (only desktop) */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Finora ecosystem illustration"
            className="img-fluid mb-4"
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="/products" className="text-decoration-none fw-semibold">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>

            <a href="/kite-demo" className="text-decoration-none fw-semibold">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;