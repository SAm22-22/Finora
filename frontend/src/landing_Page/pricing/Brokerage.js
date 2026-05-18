import React from "react";


function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Section */}
        <div className="col-12 col-md-8 p-4">
          <a href="/brokerage-calculator" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>

          <ul className="text-muted text-start fs-5 lh-lg mt-4">
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical contract notes: ₹20 per note + courier charges.</li>
            <li>NRI (non-PIS): 0.5% or ₹100 per order (whichever lower).</li>
            <li>NRI (PIS): 0.5% or ₹200 per order (whichever lower).</li>
            <li>Debit balance accounts: ₹40 per order instead of ₹20.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4 p-4">
          <a href="/charges" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
