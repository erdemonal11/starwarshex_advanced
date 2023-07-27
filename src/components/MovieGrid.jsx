import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import '../App.css';

const MovieGrid = ({ movies, favorites, toggleFavorite }) => {
  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div key={movie.episode_id} className={`grid-item item${movie.episode_id} text`}>
          <Link to={`/movie-${movie.episode_id}`}>
            <img src={`/assets/${movie.episode_id}.jpg`} className="filmposter" alt="playlogo" />
            <br />
            {movie.title} ({movie.release_date.split('-')[0]})
          </Link>
          <br />
          <Rating movie={movie} /> {/* Pass the 'movie' prop to the Rating component */}
          <br />
          <button
            className="but"
            onClick={(event) => toggleFavorite(event, movie.episode_id)}
          >
            {favorites.includes(movie.episode_id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;