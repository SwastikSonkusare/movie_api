import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { getMovieById } from "../../actions/movies";

import AddFavourites from "../AddFavourites/AddFavourites";
import Loader from "../Loader/Loader";

import "./Movie.css";
import "react-toastify/dist/ReactToastify.css";

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [favourites, setFavourites] = useState([]);

  const { movie, isLoading } = useSelector((state) => state.movies);
  const notify = () => toast("Added to favourites!!");

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Favourites"))) {
      const moviesFavourites = JSON.parse(localStorage.getItem("Favourites"));
      setFavourites(moviesFavourites);
    }
  }, []);

  const addFavourites = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
    saveToLocalStorage(newFavourites);
    notify();
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("Favourites", JSON.stringify(items));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="movie__details">
            <div className="movie movie__image">
              <img src={movie?.Poster} alt=""></img>
            </div>
            <div className="movie__summary">
              <h3>Title: {movie?.Title}</h3>
              <h3>Released: {movie?.Released}</h3>
              <h3>Director: {movie?.Director}</h3>
              <h3>Actors: {movie?.Actors}</h3>
              <h3>Plot: {movie?.Plot}</h3>
              <h3>Rating: {movie?.imdbRating}</h3>
            </div>
            <button className="search btn-pulse">
              <a href="/">Go Back</a>
            </button>
            <AddFavourites handleClick={addFavourites} movie={movie} />
          </div>
          <div className="search">
            <h1>
              <a href="/favourites">Go to favourites</a>
            </h1>
          </div>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default Movie;
