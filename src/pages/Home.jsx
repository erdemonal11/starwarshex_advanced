import "../App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieGrid from '../components/MovieGrid';
import Logout from "../pages/logout";



const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://swapi.dev/api/films/');
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const toggleFavorite = (event, episodeId) => {
    event.preventDefault();
    if (favorites.includes(episodeId)) {
      setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== episodeId));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, episodeId]);
    }
  };

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.episode_id));

  return (
    <div>
      <div>
        <img src="/assets/1.png" alt="" className="logox"/>
        <p className="text">
          This website is dedicated to Star Wars movies. You can click on the movies to see the content.
        </p>

      </div>
      <MovieGrid
        movies={movies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}

      />

      <br /><br />
      <div >
        <img src="/assets/fav1.png" alt="" className="logoq" />
        {favoriteMovies.length === 0 ? (
          <p className="text">No favorite movies selected.</p>
        ) : (
          <ul className="lst">
            {favoriteMovies.map((movie) => (
              <li key={movie.episode_id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>

      <Logout />
    </div>
  );
};

export default Home;