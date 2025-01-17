import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../Styles/MovieCard.css'


const MovieCard = ({ movie, toggleFavorite }) => {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <button onClick={() => toggleFavorite(movie)}>
        {movie.isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default MovieCard;
