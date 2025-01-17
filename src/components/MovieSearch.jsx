import React from 'react';

const MovieSearch = ({ query, setQuery, fetchMovies }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchMovies(query);
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
