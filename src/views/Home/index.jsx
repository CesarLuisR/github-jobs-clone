import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getError } from "../../controller/action";
import { useParams } from "react-router-dom";
import "./styles.scss";
import Header from "../../components/layout/Header";
import SearchBar from "../../components/common/SearchBar";
import SideBar from "../../components/layout/Sidebar";
import useJobData from "../../components/hooks/useJobData";
import ViewChanger from "../../components/common/ViewChanger";
import Footer from "../../components/layout/Footer";
import Main from "../../components/layout/Main";

const Home = () => {
  const store = useSelector((store) => store.reducer);
  const { data, locationError } = useJobData(false, store.fulltime, store.location, store.search);
  const { page } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(data));
    dispatch(getError(locationError));
  }, [dispatch, data, locationError]);

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
        <Main page={page}>
          <div className="sidebar__footer">
            <ViewChanger page={page} max={data.length} icon="chevron_left" />
            <ViewChanger
              page={page}
              max={data.length}
              text={Number(page) <= 3 ? "1" : Number(page) - 2}
            />
            <ViewChanger
              page={page}
              max={data.length}
              text={Number(page) <= 3 ? "2" : Number(page) - 1}
            />
            <ViewChanger
              page={page}
              max={data.length}
              text={Number(page) <= 3 ? "3" : page}
            />
            <ViewChanger page={page} max={data.length} icon="more_horiz" />
            <ViewChanger page={page} max={data.length} text={data.length} />
            <ViewChanger page={page} max={data.length} icon="chevron_right" />
          </div>
        </Main>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Home);
