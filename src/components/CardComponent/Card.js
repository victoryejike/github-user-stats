import React from "react";
import "./card.scss";

const Card = ({ title, subtitle, children, language }) => {
  return (
    <>
      <div className="card-body">
        {title ? <p className="title">{title}</p> : ""}
        {subtitle ? <small className="subtitle">{subtitle}</small> : ""}
        <div>{children}</div>
        <div className="language">
          <div
            className={`${
              language === "JavaScript" ? "language-color javascript" : ""
            } ${language === "CSS" ? "language-color css" : ""} ${
              language === "HTML" ? "language-color html" : ""
            }`}
          ></div>
          <div className="language-name">{language}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
