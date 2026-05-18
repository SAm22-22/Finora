import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1 className="pb-5 fs-1">People</h1>
        </div>
      </div>

      <div className="row border-top text-muted fs-5 text-start gx-5 py-4">
        <div className="col-12 col-md-5 mb-5" style={{ lineHeight: "1.7" }}>
          <img
            src="media/images/nithinKamath.jpg"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "250px" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div
          className="col-12 col-md-5 mb-5"
          style={{ lineHeight: "1.7", textDecoration: "none" }}
        >
          <p>
            Nithin bootstrapped and founded Finore in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Finore has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
