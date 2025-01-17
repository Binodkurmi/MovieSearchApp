import React, { useState, useEffect } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=26b02654"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      {error && <p>Error: {error}</p>}
      {movie ? (
        <div>
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Director: {movie.Director}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
