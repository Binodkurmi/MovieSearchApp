import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import FavoriteMovies from './components/FavoriteMovies';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const fetchMovies = async (query) => {
    try {
			const response = await axios.get(`http://www.omdbapi.com/?apikey=26b02654&s=${query}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const toggleFavorite = (movie) => {
    const updatedFavorites = favorites.some((fav) => fav.imdbID === movie.imdbID)
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <MovieSearch query={searchQuery} setQuery={setSearchQuery} fetchMovies={fetchMovies} />
      <MovieList movies={movies} toggleFavorite={toggleFavorite} />
      <FavoriteMovies favorites={favorites} />
    </div>
  );
}

export default App;
