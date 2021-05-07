import React from "react";
import "./UserHeader.scss";

const UserHeader = () => {
  return (
    <div className="user-header-menu-container">
      <p className="user-header-menu-items">Overview</p>
      <p className="user-header-menu-items">Repositories</p>
      <p className="user-header-menu-items">Projects</p>
      <p className="user-header-menu-items">Packages</p>
    </div>
  );
};

export default UserHeader;
