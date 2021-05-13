import React, { useEffect, useState } from "react";

import Card from "../components/CardComponent/Card";
import SideBar from "../components/SideBarComponent/SideBar";
import Header from "../components/HeaderComponent/Header";
import UserHeader from "../components/UserHeaderComponent/UserHeader";
import UserContribution from "../components/UserContributionComponent/UserContribution";
import "./UserStatPage.scss";

import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [pinnedData, setPinnedData] = useState([]);
  const fetchGithubData = async () => {
    const response = await axios.get(
      `https://api.github.com/users/victoryejike`
    );
    console.log(response.data);
    setUserData(response.data);
  };

  const fetchPinnedData = async () => {
    const response = await axios.get(
      `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=victoryejike`
    );
    let data = response.data;
    setPinnedData(data);
  };

  useEffect(() => {
    fetchGithubData();
    fetchPinnedData();
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
            {pinnedData.map((pinnedData, i) => (
              <Card
                key={i}
                index={i}
                title={pinnedData.repo}
                language={pinnedData.language}
              >
                {pinnedData.description}
              </Card>
            ))}
          </div>
          <UserContribution />
        </div>
      </div>
    </>
  );
};

export default User;
