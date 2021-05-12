import React from "react";
import "./styles.scss";
import Header from "../../components/layout/Header";
import SearchBar from "../../components/common/SearchBar";
import SideBar from "../../components/layout/Sidebar";
import JobCard from "../../components/common/JobCard";

const Home = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
