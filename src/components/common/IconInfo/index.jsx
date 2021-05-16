import React from "react";
import "./styles.scss";

const IconInfo = ({ icon, text, marginNone, small }) => {
  return (
    <div className={`icon-info ${marginNone && "none"} ${small && "small"}`}>
      <span className="material-icons icon">{icon}</span>
      <div className="icon-info__text">{text}</div>
    </div>
  );
};

export default IconInfo;
