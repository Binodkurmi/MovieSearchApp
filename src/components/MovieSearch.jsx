import React from 'react';

const MovieSearch = ({ query, setQuery, fetchMovies }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie..." 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MovieSearch;
