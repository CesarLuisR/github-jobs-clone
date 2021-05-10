import React from 'react';
import "./styles.scss";

const SearchBar = () => {
  return (
    <div className="sidebar">
      <div className="input-zone">
        <span className="material-icons">work_outline</span>
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
}

export default SearchBar
