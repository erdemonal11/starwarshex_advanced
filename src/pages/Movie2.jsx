import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "../dot.jsx";
const Movie2 = () => {
  const desiredEpisodeId = 5;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("https://swapi.dev/api/films/");
      setMovies(response.data.results);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);
  const desiredMovie = movies.find(
    (movie) => movie.episode_id === desiredEpisodeId
  );

  return (
    <>
      {desiredMovie ? (
        <div className="asd">
        <div className="movietext crawl">
          <h2>{desiredMovie.title}</h2>
          <div>Episode {desiredMovie.episode_id}</div>
          <div>{desiredMovie.opening_crawl}</div>
          <div>Producers: {desiredMovie.producer}</div>
          <div>Director: {desiredMovie.director}</div>
          <div>Release Date: {desiredMovie.release_date}</div>
          <div>Edit Date: {desiredMovie.edited}</div>
          <div>Created Date: {desiredMovie.created}</div>
        </div>
        </div>
      ) : (
        <div>
          <img src={`/assets/2.jpg`} className="filmposter" alt="playlogo" />
          <p className="text">
            Loading <br />
            <br />
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </p>
        </div>
      )}
      <div>
        <br />
        <div>
          <button className="but butx">
            <Link to={"/home"}>Go Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Movie2;