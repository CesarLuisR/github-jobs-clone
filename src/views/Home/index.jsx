import React from "react";
import "./styles.scss";
import Header from "../../components/layout/Header";
import SearchBar from "../../components/common/SearchBar";
import SideBar from "../../components/layout/Sidebar";
import JobCard from "../../components/common/JobCard";
import useJobData from "../../components/hooks/useJobData";
import ViewChanger from "../../components/common/ViewChanger";
import Footer from "../../components/layout/Footer";

const Home = () => {
  console.log(useJobData());

  return (
    <div className="home">
      <Header />
      <div className="search-zone">
        <SearchBar
          button
          icon="work_outline"
          placeholder="Title, companies, expertise or benefits"
        />
      </div>
      <div className="sidebars-container">
        <SideBar />
        <div className="main">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <div className="sidebar__footer">
            <ViewChanger icon="chevron_left" />
            <ViewChanger text="1" />
            <ViewChanger text="2" />
            <ViewChanger text="3" />
            <ViewChanger icon="more_horiz" />
            <ViewChanger text="10" />
            <ViewChanger icon="chevron_right" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
