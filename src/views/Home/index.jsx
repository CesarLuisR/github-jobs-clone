import React from 'react';
import "./styles.scss";
import Header from '../../components/layout/Header';
import SearchBar from '../../components/common/SearchBar';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="search-zone">
        <SearchBar />
      </div>
      <div className="sidebars-container">
        
      </div>
    </div>
  )
}

export default Home
