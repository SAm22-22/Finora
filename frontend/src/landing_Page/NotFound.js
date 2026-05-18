import React from "react";

function NotFound() {
  return (
    <div className="container text-center py-5">
      {/* Heading */}
      <h1
        className="fw-bold mb-3 mt-5"
        style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
      >
        404 Not Found
      </h1>

      {/* Subtext */}
      <p
        className="text-muted mx-auto mb-4"
        style={{ maxWidth: "600px", fontSize: "clamp(12px, 2vw, 16px)" }}
      >
        Sorry , the page you are looking for does not exites.
      </p>
    </div>
  );
}

export default NotFound;
