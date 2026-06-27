import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);

    // MOBILE MENU CLOSE AFTER CLICK
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

   window.location.href =
  `${process.env.REACT_APP_FRONTEND_URL}/login`;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="menu-container">
  
      {/* LOGO */}
      <img src="logo.png" alt="Logo" className="logo" />

      {/* MENUS */}
      <div className={`menus ${menuOpen ? "active" : ""}`}>
        <ul>
          {/* DASHBOARD */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to=""
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          {/* ORDERS */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          {/* HOLDINGS */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          {/* POSITIONS */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          {/* FUNDS */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          {/* APPS */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                App
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* PROFILE */}
        <div className="profile-container">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {user?.username ? user.username.slice(0, 2).toUpperCase() : "ZU"}
            </div>

            <p className="username">{user?.username}</p>
          </div>

          {/* DROPDOWN */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>

              <Link to="/settings" className="dropdown-item">
                Settings
              </Link>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
