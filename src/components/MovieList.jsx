import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, toggleFavorite }) => {
  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default MovieList;
