import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sideBar-container">
        <div className="sideBar-img-container">
          <img alt="user stat display img" />
        </div>
        <div className="sideBar-user-detail">
          <h3 className="user-name"> </h3>
          <br></br>
          <span className="username"> </span>
          <h4 className="user-designation"> </h4>
          <button className="user-editProfile-button">Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
