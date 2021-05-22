import React, { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import {
  setSearch,
  setSearchLocation,
  Clear,
} from "../../../controller/action";

const SearchBar = (props) => {
  const [inputData, setInputData] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputData(e.target.value);
    if (props.fullwidth) dispatch(setSearchLocation(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.fullwidth) {
      dispatch(Clear());
      dispatch(setSearch(inputData));
      setInputData("");
    }
  };

  return (
    <form
      className={`search-bar ${props.fullwidth && "fullwidth"}`}
      onSubmit={handleSubmit}
    >
      <div className="input-zone">
        <span className="material-icons">{props.icon}</span>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={handleChange}
          value={inputData || ""}
          required
        />
      </div>
      {props.button && (
        <input type="submit" className="search-btn" value="Search" />
      )}
    </form>
  );
};

export default SearchBar;
