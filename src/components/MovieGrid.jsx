import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import "../App.css";
import "../dot.jsx";

const MovieGrid = ({ movies, favorites, toggleFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <> LOADING PLEASE WAIT{" "}
    <br /><br />
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div></>;
  }

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div
          key={movie.episode_id}
          className={`grid-item item${movie.episode_id} text`}
        >
          <Link to={`/movie-${movie.episode_id}`}>
            <img
              src={`/assets/${movie.episode_id}.jpg`}
              className="filmposter"
              alt="playlogo"
            />
            <br />
            {movie.title} ({movie.release_date.split("-")[0]})
          </Link>

          <Rating movie={movie} />

          <button
            className="but butx"
            onClick={(event) => toggleFavorite(event, movie.episode_id)}
          >
            {favorites.includes(movie.episode_id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
