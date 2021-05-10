import React, { useEffect, useState } from "react";
import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import Header from "../components/HeaderComponent/Header";
import UserHeader from "../components/UserHeaderComponent/UserHeader";
import "./UserStatPage.scss";

import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.github.com/users/victoryejike`
    );
    console.log(response.data);
    setUserData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="group-header">
        <Header />
        <div className="user-menu">
          <UserHeader data={userData} />
        </div>
      </div>
      <div className="user-display">
        <SideBar data={userData} />
        <div className="repo-cards">
          <div className="repo-info">
            <p>Pinned</p>
            <p>Customise your pins</p>
          </div>
          <div className="repo-card-items">
            <Card title="E-commerce" subtitle="forked from victorygithub" />
            <Card title="E-commerce" subtitle="forked from victorygithub" />
            <Card title="E-commerce" subtitle="forked from victorygithub" />
            <Card title="E-commerce" subtitle="forked from victorygithub" />
            <Card title="E-commerce" subtitle="forked from victorygithub" />
            <Card title="E-commerce" subtitle="forked from victorygithub" />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
