import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-menu">
      <div className="header-left-menu">
        <div className="header-left-menu-logo">
          <img src="=" alt="github logo" />
        </div>
        <input type="search" placeholder="Search or jump to..." />
        <div className="header-left-menu-items">
          <h4>Pull requests</h4>
          <h4>Issues</h4>
          <h4>Marketplace</h4>
          <h4>Explore</h4>
        </div>
      </div>
      <div className="header-right-menu">
        <div className="header-right-menu-icons">
          <div className="header-right-menu-icons-container">
            <img src="=" alt="notification icon" />
          </div>
          <div className="header-right-menu-icons-container">
            <img src="=!" alt="addition icon" />
          </div>
          <div className="header-right-menu-icons-container">
            <img src="=£" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
