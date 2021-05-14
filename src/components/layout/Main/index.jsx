import React from "react";
import JobCard from "../../common/JobCard";

const Main = (props) => {
  return (
    <div className="main">
      {props.data && (
        props.data.map((job, index) => (
          <JobCard
            key={index}
            bussines={job.company}
            image={job.company_logo}
            jobName={job.title}
            type={job.type}
            location={job.location}
            date={job.created_at}
          />
        ))
      )}
      {props.children}
    </div>
  );
};

export default Main;
