import React from "react";
import "./search.styles.css";

const Search = ({ onSearch }) => {
  return (
    <div className="search">
      <input type="search" placeholder="search monster" onChange={onSearch} />
    </div>
  );
};

export default Search;
