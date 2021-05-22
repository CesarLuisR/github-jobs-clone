import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const JobSideBar = (props) => {
  return (
    <div className="job-sidebar">
      <Link to="/1" className="go-back">
        <span className="material-icons arrow">trending_flat</span>
        Back to search
      </Link>
      <div className="how-to-apply">
        <div className="title">How to apply</div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default JobSideBar;
