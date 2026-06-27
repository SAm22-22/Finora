import React, { useState } from "react";

const MobileHeader = ({ openDrawer }) => {
  const [showProfile, setShowProfile] = useState(false);

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href =
      `${process.env.REACT_APP_FRONTEND_URL}/login`;
  };

  return (
    <div className="mobile-header">

      <button
        className="mobile-icon-btn"
        onClick={openDrawer}
      >
        ☰
      </button>

      <div className="mobile-logo">
        <img
          src="/logo.png"
          alt="Finora"
          className="mobile-logo-img"
        />
        <span>Finora</span>
      </div>

      <div className="mobile-profile">

        <button
          className="mobile-icon-btn"
          onClick={() =>
            setShowProfile(!showProfile)
          }
        >
          👤
        </button>

        {showProfile && (
          <div className="mobile-profile-dropdown">

            <div className="mobile-profile-info">
              {user?.username || "User"}
            </div>

            <button className="mobile-profile-item">
              Profile
            </button>

            <button
              className="mobile-profile-item logout"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default MobileHeader;