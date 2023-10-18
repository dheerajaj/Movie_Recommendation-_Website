import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={query} 
        onChange={handleInputChange}
        placeholder="Search for a Movie..."
      ></input> 
      &emsp;
    </form>
    
    <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
