import React from "react";

const price = [
  {
    img: "media/images/pricingEquity.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.",
    alt: "Equity delivery",
  },
  {
    img: "media/images/intradayTrades.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
    alt: "Intraday trades",
  },
  {
    img: "media/images/pricingEquity.svg",
    title: "Free direct MF",
    description:
      " All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    alt: "Mutual funds",
  },
];

function Hero() {
  return (
    <div className="container text-center border-bottom my-5">
      {/* Heading */}
      <div>
        <h1 className="fs-1 pb-3">Pricing</h1>
        <h3 className="fs-5 text-muted pb-5">
          Free equity investments and flat ₹20 for intraday & F&O trades
        </h3>
      </div>

      {/* Cards */}
      <div className="row">
        {price.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 p-4">
            <img
              src={item.img}
              alt={item.alt}
              className="img-fluid mb-3"
              style={{ maxHeight: "200px" }}
              loading="lazy"
            />
            <h5 className="fs-3 pb-3"> {item.title}</h5>
            <p className="text-muted fs-6">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
