import React from "react";
import "./SideBar.scss";

const SideBar = ({ data }) => {
  return (
    <>
      <div className="sideBar-container">
        <div className="sideBar-img-container">
          <img src={data.avatar_url} alt="user stat display img" />
        </div>
        <div className="sideBar-user-detail">
          <h2 className="user-name"> {data.name} </h2>

          <span className="username">{data.login}</span>
          <p className="user-designation">{data.bio}</p>
          <button className="user-editProfile-button">Edit profile</button>
          <div className="user-social-details">
            <small> 2 followers</small>
            <small> 2 following</small>
            <small> 2 </small>
            <div>
              <p className="user-location">{data.location}</p>
              <p className="user-twitter-action">
                <a href="#?">@{data.twitter_username}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="user-achievements">
          <h4>Achievements</h4>
          <img alt="user-achievement" />
        </div>
        <div className="user-organization">
          <h4>Organizations</h4>
          <img alt="user-organization" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
