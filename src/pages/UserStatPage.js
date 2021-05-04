import React from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import "./UserStatPage.scss";

const User = () => {
  return (
    <>
      <h1>Display User Stat here</h1>
      <div className="user-display">
        <SideBar />
        <Card title="E-commerce" subtitle="forked from victorygithub" />
      </div>
    </>
  );
};

export default User;
