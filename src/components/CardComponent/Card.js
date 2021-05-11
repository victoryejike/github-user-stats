import React from "react";
import "./card.scss";

const Card = ({ title, subtitle, children, language }) => {
  return (
    <>
      <div className="card-body">
        {title ? <p className="title">{title}</p> : ""}
        {subtitle ? <small className="subtitle">{subtitle}</small> : ""}
        <div>{children}</div>
        <div>{language}</div>
      </div>
    </>
  );
};

export default Card;
