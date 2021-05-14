import React, { useEffect } from "react";
import "./styles.scss";
import Header from "../../components/layout/Header";
import SearchBar from "../../components/common/SearchBar";
import SideBar from "../../components/layout/Sidebar";
import useJobData from "../../components/hooks/useJobData";
import ViewChanger from "../../components/common/ViewChanger";
import Footer from "../../components/layout/Footer";
import Main from "../../components/layout/Main";
import { useDispatch } from "react-redux";
import { getData } from "../../controller/action";

const Home = () => {
  const { jobs, locationError } = useJobData();

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(jobs, locationError);

    dispatch(getData(jobs));
  }, [dispatch, jobs, locationError]);

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
        <Main data={jobs[0]}>
          <div className="sidebar__footer">
            <ViewChanger icon="chevron_left" />
            <ViewChanger text="1" />
            <ViewChanger text="2" />
            <ViewChanger text="3" />
            <ViewChanger icon="more_horiz" />
            <ViewChanger text={jobs.length} />
            <ViewChanger icon="chevron_right" />
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
