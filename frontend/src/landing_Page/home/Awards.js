import React from "react";

function Awards() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        {/* Left Image */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Finora largest broker illustration"
            className="img-fluid"
          />
        </div>

        {/* Spacer (desktop only) */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Right Content */}
        <div className="col-12 col-lg-6"> 
          <h1 className="fw-bold mb-4">
            Largest stock broker in India
          </h1>

          <p className="text-muted mb-4">
            2+ million Finora clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="row gy-3">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Logos */}
          <img
            src="media/images/pressLogos.png"
            alt="Press logos"
            className="img-fluid mt-4"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;