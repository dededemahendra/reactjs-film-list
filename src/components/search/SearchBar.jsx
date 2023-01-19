import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.example.com/search?q=${searchTerm}`);
    setSearchResults(res.data.results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button type='submit'>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar;
