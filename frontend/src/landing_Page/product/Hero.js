import React from "react";

function Hero() {
  return (
    <div className="container text-center border-bottom my-5">
      <div>
        <h1>Technology</h1>
   
      <h3 className="fs-4 p-2 text-muted">
        Sleek, modern and intuitive trading platforms
      </h3>
      <p className="p-1 text-muted pb-5 ">
        Check out our&nbsp;
        <a href="/" style={{ textDecoration: "none" }}>
          investment offerings
          <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
        </a>
      </p>  
       </div>
    </div>
  );
}

export default Hero;
