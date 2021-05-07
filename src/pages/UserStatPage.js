import React from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import Header from "../components/HeaderComponent/Header";
import UserHeader from "../components/UserHeaderComponent/UserHeader";
import "./UserStatPage.scss";

const User = () => {
  return (
    <>
      <div className="group-header">
        <Header />
        <div className="user-menu">
          <UserHeader />
        </div>
      </div>
      <div className="user-display">
        <SideBar />
        <div className="repo-cards">
          <p>Pinned</p>
          <Card title="E-commerce" subtitle="forked from victorygithub" />
          <Card title="E-commerce" subtitle="forked from victorygithub" />
          <Card title="E-commerce" subtitle="forked from victorygithub" />
        </div>
      </div>
    </>
  );
};

export default User;
