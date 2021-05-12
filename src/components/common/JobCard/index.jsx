import React from "react";
import JobType from "../JobType";
import "./styles.scss";
import image from "../../../assets/search-bg.jpeg";
import IconInfo from "../IconInfo";

const JobCard = (props) => {
  return (
    <div className="job-card">
      <div className="job-card__main">
        <img src={image} alt="hola" />
        <div className="job-card__info">
          <div className="bussines-name">Kasisto</div>
          <div className="job-name">Front-End Software Engineer</div>
          <JobType type="Full time" />
          {/* {props.type && <JobType type="Full time" />} */}
        </div>
      </div>
      <div className="icons-zone">
        <IconInfo icon="public" text="New York" />
        <IconInfo icon="schedule" text="5 day ago" />
      </div>
    </div>
  );
};

export default JobCard;
