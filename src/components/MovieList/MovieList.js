import React from "react";
import { useNavigate } from "react-router-dom";

import "./MovieList.css";

const MovieList = ({ movies, removeMovie, removeFavourites }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <>
      {movies?.map((movie, i) => (
        <div key={i} className="movie">
          <img
            src={movie.Poster}
            alt=""
            onClick={() => handleClick(movie)}
          ></img>
          <div className="movie__info">
            <div>{movie.Title}</div>
            <div>
              <div>{movie.Year}</div>
              {removeMovie && (
                <div onClick={() => removeFavourites(movie)}>Remove</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
