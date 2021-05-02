import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="sideBar-container">
        <div className="sideBar-img-container">
          <img alt="user stat display img" />
        </div>
        <div className="sideBar-user-detail">
          <h2 className="user-name"> Ejike Chinecherem Victory </h2>

          <span className="username">victoryejike </span>
          <h4 className="user-designation"> </h4>
          <button className="user-editProfile-button">Edit Profile</button>
          <div className="user-social-details">
            <small> 2 followers</small>
            <small> 2 following</small>
            <small> 2 </small>
          </div>
        </div>
        <div className="user-achievements">
          <img alt="user-achievement" />
        </div>
        <div className="user-organization">
          <img alt="user-organization" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
