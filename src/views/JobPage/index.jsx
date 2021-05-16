import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import useJobData from "../../components/hooks/useJobData";

const JobPage = () => {
  const { id } = useParams();
  const { data } = useJobData(id);

  console.log(data);

  return <div className="job-page">
    <Header />
  </div>;
};

export default JobPage;
