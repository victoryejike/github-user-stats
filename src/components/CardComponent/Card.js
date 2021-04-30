import React from "react";
import "./card.scss";

const Card = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="card-body">
        {title ? <p className="title">{title}</p> : ""}
        {subtitle ? <small className="subtitle">{subtitle}</small> : ""}
        {children}
      </div>
    </>
  );
};

export default Card;
