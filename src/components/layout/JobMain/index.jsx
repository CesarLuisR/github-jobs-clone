import React from "react";
import "./styles.scss";
import JobType from "../../common/JobType";
import IconInfo from "../../common/IconInfo";
import Parser from "html-react-parser";

const JobMain = (props) => {
  function formatData(data) {
    const splittedData = data.split(" ");
    return `${splittedData[0]} ${splittedData[1] || ""} ${
      splittedData[2] || ""
    }`;
  }

  return (
    <div className="job-main">
      <div className="title-zone">
        <div className="title">
          <div className="job-name">{props.data.title}</div>
          <JobType type={props.data.type} marginNone />
        </div>
        <IconInfo
          icon="schedule"
          text={formatData(props.data.created_at)}
          marginNone
        />
      </div>
      <div className="subtitle-zone">
        <img src={props.data.company_logo} alt={props.data.title} />
        <div className="subtitle__info">
          <div className="company-name">{props.data.company}</div>
          <IconInfo
            icon="public"
            text={formatData(props.data.location)}
            marginNone
            small
          />
        </div>
      </div>
      <div className="description">{Parser(props.data.description)}</div>
    </div>
  );
};

export default JobMain;
