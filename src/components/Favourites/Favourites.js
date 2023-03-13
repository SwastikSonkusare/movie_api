import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Loader from "../Loader/Loader";
import MovieList from "../MovieList/MovieList";

import "react-toastify/dist/ReactToastify.css";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const removeMovie = true;

  const notify = () => toast("Removed from favourites!!");

  useEffect(() => {
    setIsLoading(true);
    const moviesFavourites = JSON.parse(localStorage.getItem("Favourites"));
    setIsLoading(false);
    setFavourites(moviesFavourites);
  }, []);

  const removeFavourites = (movie) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavourites);
    saveToLocalStorage(newFavourites);
    saveToLocalStorage(newFavourites);
    notify();
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("Favourites", JSON.stringify(items));
  };

  return (
    <>
      <div className="search">
        <h1>
          <a href="/">MOVIES</a>
        </h1>
      </div>
      <div className="container">
        {favourites.length < 1 && (
          <h1 style={{ color: "#FFEA20" }}>No favourites yet </h1>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <MovieList
            removeMovie={removeMovie}
            movies={favourites}
            removeFavourites={removeFavourites}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Favourites;
