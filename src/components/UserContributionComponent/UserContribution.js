import React from "react";
import "./UserContribution.scss";

import ContributionCard from "../ContributionCardComponent/ContributionCard";

const UserContribution = () => {
  return (
    <>
      <div className="user-activity">
        <div className="contribution-container">
          <div>
            <div className="repo-info contribution">
              <p>210 Contributions in the last year</p>
              <p>Contribution settings</p>
            </div>
            <ContributionCard />
          </div>
          <aside>
            <button className="btn-year">2021</button>
          </aside>
        </div>
      </div>
    </>
  );
};

export default UserContribution;
