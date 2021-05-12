import React, { useState } from "react";
import "./styles.scss";

const SearchBar = (props) => {
  const [inputData, setInputData] = useState();
  const handleChange = (e) => setInputData(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
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
