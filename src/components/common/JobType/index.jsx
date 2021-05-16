import React from "react";
import "./styles.scss";

const JobType = ({ type, marginNone }) => {
  return <div className={`job-type ${marginNone && "none"}`}>{type}</div>;
};

export default JobType;
