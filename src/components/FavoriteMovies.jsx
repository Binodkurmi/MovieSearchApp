import React from 'react';

const FavoriteMovies = ({ favorites }) => {
  return (
    <div className="favorite-movies">
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div key={movie.imdbID} className="favorite-movie-card">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <p>No favorite movies yet!</p>
      )}
    </div>
  );
};

export default FavoriteMovies;
