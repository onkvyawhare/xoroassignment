// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />
  );
};

export default SearchBar;
