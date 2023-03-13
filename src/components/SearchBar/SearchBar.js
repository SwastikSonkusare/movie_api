import React from "react";

import "./SearchBar.css";

const SearchBar = ({ searchValue, setSearchValue, handleClick }) => {
  return (
    <div className="search">
      <h1>
        <a href="/">Movies</a>
      </h1>
      <h1>
        <a href="/favourites">Go to favourites</a>
      </h1>
      <div className="form">
        <input
          placeholder="Search any movies"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
