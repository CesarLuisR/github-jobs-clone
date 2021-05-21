import React, { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { setSearch, Clear } from "../../../controller/action";

const SearchBar = (props) => {
  const [inputData, setInputData] = useState();
  const handleChange = (e) => setInputData(e.target.value);
  const dispatch = useDispatch();

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
