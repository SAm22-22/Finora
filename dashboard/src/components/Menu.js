import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const handleProfileClick = () => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // localStorage clear karo
    localStorage.removeItem("token");

    // login page pe bhejo
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                App
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* PROFILE SECTION */}
        <div className="profile-container">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>

              <Link to="/settings" className="dropdown-item">
                Settings
              </Link>

              <p className="dropdown-item logout" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
