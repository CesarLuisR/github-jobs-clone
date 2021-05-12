import React from "react";
import JobType from "../JobType";
import "./styles.scss";
import IconInfo from "../IconInfo";

const JobCard = (props) => {
  return (
    <div className="job-card">
      <div className="job-card__main">
        <img src={props.image} alt={props.jobName} />
        <div className="job-card__info">
          <div className="bussines-name">{props.bussines}</div>
          <div className="job-name">{props.jobName}</div>
          {props.type && <JobType type={props.type} />}
        </div>
      </div>
      <div className="icons-zone">
        <IconInfo icon="public" text={props.location} />
        <IconInfo icon="schedule" text={props.date} />
      </div>
    </div>
  );
};

export default JobCard;
