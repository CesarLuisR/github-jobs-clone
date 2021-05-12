import React from "react";
import CheckBox from "../../common/CheckBox";
import SearchBar from "../../common/SearchBar";
import "./styles.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <CheckBox type="checkbox" text="Full time" />
      <div className="location">
        <div className="location__title">Location</div>
        <SearchBar
          fullwidth
          icon="public"
          placeholder="City, state, zip code or country"
        />
        <div className="location__matches">
          <CheckBox type="radio" text="London" />
          <CheckBox type="radio" text="Los angeles" />
          <CheckBox type="radio" text="New York" />
          <CheckBox type="radio" text="Berlin" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
