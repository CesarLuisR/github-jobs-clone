import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import JobSideBar from "../../components/layout/JobSideBar";
import useJobData from "../../components/hooks/useJobData";
import Parser from "html-react-parser";
import JobMain from "../../components/layout/JobMain";
import Spinner from "../../components/common/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const { data } = useJobData(id);

  console.log(data);

  return (
    <div className="container">
      <Header />
      {!data.how_to_apply && <Spinner />}
      <div className="job-page">
        {data.how_to_apply && (
          <>
            <JobSideBar text={Parser(data.how_to_apply)} />
            <JobMain data={data} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobPage;
