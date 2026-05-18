import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5 gy-4">
          {/* Logo */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "100px" }}
            />
            <p className="mt-1 me-5">
              © 2010 - 2024, Not Finora Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col">
            <p className="fw-bold mb-3">Company</p>
            <a href="/" className="d-block mb-2">
              About
            </a>
            <a href="/" className="d-block mb-2">
              Products
            </a>
            <a href="/" className="d-block mb-2">
              Pricing
            </a>
            <a href="/" className="d-block mb-2">
              Referral programme
            </a>
            <a href="/" className="d-block mb-2">
              Careers
            </a>
            <a href="/" className="d-block mb-2">
              Finora.tech
            </a>
            <a href="/" className="d-block mb-2">
              Press & media
            </a>
            <a href="/" className="d-block mb-2">
              Finora cares (CSR)
            </a>
          </div>

          {/* Support */}
          <div className="col">
            <p className="fw-bold mb-3">Support</p>
            <a href="/" className="d-block mb-2">
              Contact
            </a>
            <a href="/" className="d-block mb-2">
              Support portal
            </a>
            <a href="/" className="d-block mb-2">
              Z-Connect blog
            </a>
            <a href="/" className="d-block mb-2">
              List of charges
            </a>
            <a href="/" className="d-block mb-2">
              Downloads & resources
            </a>
          </div>

          {/* Account */}
          <div className="col">
            <p className="fw-bold mb-3">Account</p>
            <a href="/" className="d-block mb-2">
              Open account
            </a>
            <a href="/" className="d-block mb-2">
              Fund transfer
            </a>
            <a href="/" className="d-block mb-2">
              60 day challenge
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Finora Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Finora Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Finora Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Finora Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to complaints
            Finora.com, for DP related to dp Finora.com. Please ensure you
            carefully read the Risk Disclosure Document as prescribed by SEBI |
            ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Finora and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="container">
        <div
          className="d-flex flex-wrap justify-content-center gap-3 mt-4 text-muted mb-4"
          style={{ fontSize: "13px" }}
        >
          <a href="/">NSC</a>
          <a href="/">BSE</a>
          <a href="/">MCX</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Policy & Procedures</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
