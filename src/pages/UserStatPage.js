import React from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import Header from "../components/HeaderComponent/Header";
import "./UserStatPage.scss";

const User = () => {
  return (
    <>
      <Header />
      <div className="user-display">
        <SideBar />
        <Card title="E-commerce" subtitle="forked from victorygithub" />
      </div>
    </>
  );
};

export default User;
