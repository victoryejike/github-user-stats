import React from "react";
import "./UserContribution.scss";

const UserContribution = () => {
  return (
    <>
      <div className="user-activity">
        <div className="contribution-container">
          <div className="repo-info contribution">
            <p>210 Contributions in the last year</p>
            <p>Contribution settings</p>
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
