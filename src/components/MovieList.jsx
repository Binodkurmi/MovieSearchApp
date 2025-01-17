import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieList = ({ movies, toggleFavorite }) => {
  return (
    <div className="movie-list">
      {movies && movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={() => toggleFavorite(movie)}>
            {movie.isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
