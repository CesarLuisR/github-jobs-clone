import React from "react";
import CheckBox from "../../common/CheckBox";
import SearchBar from "../../common/SearchBar";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, Clear } from "../../../controller/action";
import useLocationMatches from "../../hooks/useLocationMatches";

const SideBar = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((store) => store.reducer.searchLocation);
  const matches = useLocationMatches(inputValue);

  const handleChange = (e) => {
    dispatch(Clear());
    dispatch(setLocation(e.target.value));
  };

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
        <form className="location__matches" onChange={handleChange}>
          {matches &&
            matches.length !== 0 &&
            matches.map((location, index) => (
              <CheckBox type="radio" text={location} key={index} />
            ))}
        </form>
      </div>
    </div>
  );
};

export default SideBar;
