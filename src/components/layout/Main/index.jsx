import React from "react";
import JobCard from "../../common/JobCard";
import { useSelector } from "react-redux";
import Spinner from "../../common/Spinner";

const Main = ({ children, page }) => {
  const data = useSelector((store) => store);

  return (
    <div className="main">
      {data.reducer.data[page - 1] ? (
        data.reducer.data[page - 1].map((job, index) => (
          <JobCard
            key={index}
            bussines={job.company}
            image={job.company_logo}
            jobName={job.title}
            type={job.type}
            location={job.location}
            date={job.created_at}
            id={job.id}
          />
        ))
      ) : (
        <Spinner />
      )}
      {children}
    </div>
  );
};

export default Main;
