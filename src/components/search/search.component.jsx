import React from "react";
import './search.style.css'

export const SearchBar = function ({placeholder, handleChange}) {
    return (
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
    
}