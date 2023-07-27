import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "../dot.jsx";
const Movie3 = () => {
  const desiredEpisodeId = 6;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("https://swapi.dev/api/films/");
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);
  const desiredMovie = movies.find(
    (movie) => movie.episode_id === desiredEpisodeId
  );
  return (
    <>
      <div className="movietext">
        {desiredMovie ? (
          <div key={desiredMovie.episode_id}>
            <h2>{desiredMovie.title}</h2>
            <p>Episode {desiredMovie.episode_id}</p>
            <br />
            <p>{desiredMovie.opening_crawl}</p>
            <br />
            <p>Producers: {desiredMovie.producer}</p>
            <p>Director: {desiredMovie.director}</p>
            <p>Release Date: {desiredMovie.release_date}</p>
            <br />
            <p>Edit Date :{desiredMovie.edited}</p>
            <p>Created Date: {desiredMovie.created}</p>
          </div>
        ) : (
          <>
          <div><img src={`/assets/3.jpg`} className="filmposter" alt="playlogo" /></div>
          <p>
          Loading{" "}
          <br /><br />
          <div className="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </p>
        </>
        )}
      </div>
      <div>
        <br />
        <button className="text">
          <Link to={"/home"}>Go Back</Link>
        </button>
      </div>
    </>
  );
};
export default Movie3;