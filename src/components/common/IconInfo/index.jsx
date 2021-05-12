import React from "react";
import "./styles.scss";

const IconInfo = ({ icon, text }) => {
  return (
    <div className="icon-info">
      <span className="material-icons icon">{icon}</span>
      <div className="icon-info__text">{text}</div>
    </div>
  );
};

export default IconInfo;
