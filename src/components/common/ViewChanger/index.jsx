import React from "react";
import "./styles.scss";

const ViewChanger = ({ icon, text }) => {
  return (
    <div className={`view-changer ${icon === "more_horiz" && "more"}`}>
      {icon ? (
        <span className="material-icons">{icon}</span>
      ) : (
        <div className="view-changer__text">{text}</div>
      )}
    </div>
  );
};

export default ViewChanger;
