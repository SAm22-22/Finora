import React from "react";

function LeftSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mt-5">
        <div className="col-12 col-md-6">
          <img
            src={imgUrl}
            alt={productName}
            className="img-fluid"
            loading="lazy"
          />
        </div>

        <div className="col-12 col-md-6 ps-md-5">
          <h1 className="pt-4">{productName}</h1>

          <p className="text-muted fs-5 py-2">{productDescription}</p>

          <div className="pt-3 d-flex gap-3">
            <a href={tryDemo}>
              Try {productName} Demo{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
            <a href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>

          <div className="pt-4 d-flex gap-3">
            <a href={googleplay} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Download on Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
