import React from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import "./UserStatPage.scss";

const User = () => {
  return (
    <div className="user-display">
      <h1>Display User Stat here</h1>
      <SideBar />
      <Card title="E-commerce" subtitle="forked from victorygithub" />
    </div>
  );
};

export default User;
