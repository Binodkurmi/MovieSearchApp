import React from 'react';

const FavoriteMovies = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>)
      )}
    </div>
  );
};

export default FavoriteMovies;
