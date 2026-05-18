import React from "react";

import { useNavigate } from "react-router-dom";

const platforms = [
  {
    img: "media/images/smallcaseLogo.png",
    title: "Thematic investment platform",
    alt: "Smallcase",
  },
  {
    img: "media/images/streakLogo.png",
    title: "Algo & strategy platform",
    alt: "Streak",
  },
  {
    img: "media/images/sensibullLogo.svg",
    title: "Options trading platform",
    alt: "Sensibull",
  },
  {
    img: "media/images/zerodhaFundhouse.png",
    title: "Asset management",
    alt: "Zerodha Fundhouse",
  },
  {
    img: "media/images/goldenpiLogo.png",
    title: "Bonds trading platform",
    alt: "GoldenPi",
  },
  {
    img: "media/images/dittoLogo.png",
    title: "Insurance",
    alt: "Ditto",
  },
];

function Universe() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container mt-5 text-center">
      <h1>The Zerodha Universe</h1>

      <p className="text-muted">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mt-5">
        {platforms.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 p-4">
            <img
              src={item.img}
              alt={item.alt}
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />

            <p className="text-muted small">{item.title}</p>
          </div>
        ))}
      </div>

      <button className="btn btn-primary px-4 py-2 mt-4" onClick={handleSignup}>
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
