import React from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import Header from "../components/HeaderComponent/Header";
import UserHeader from "../components/UserHeaderComponent/UserHeader";
import "./UserStatPage.scss";

const User = () => {
  return (
    <>
      <Header />
      <div className="user-display">
        <UserHeader />
        <SideBar />
        <Card title="E-commerce" subtitle="forked from victorygithub" />
      </div>
    </>
  );
};

export default User;
