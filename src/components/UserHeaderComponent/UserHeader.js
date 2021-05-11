import React from "react";
import "./UserHeader.scss";

const UserHeader = ({ data }) => {
  return (
    <div className="user-header-menu-container">
      <p className="user-header-menu-items">Overview</p>
      <p className="user-header-menu-items">
        Repositories <span>{data.public_repos}</span>
      </p>
      <p className="user-header-menu-items">Projects</p>
      <p className="user-header-menu-items">Packages</p>
    </div>
  );
};

export default UserHeader;
