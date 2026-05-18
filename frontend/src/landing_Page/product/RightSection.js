import React from "react";

function RightSection({ imgUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-12 col-md-6 ">
          <h1 className="pt-4">{productName}</h1>

          <p className="text-muted fs-6 py-2 pe-4">{productDescription}</p>
          <a href={learnMore}>
            Learn More{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 ps-md-5">
          <img
            src={imgUrl}
            alt={productName}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
