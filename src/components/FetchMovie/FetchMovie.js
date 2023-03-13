import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getMoviesBySearch } from "../../actions/movies";

import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

import "./FetchMovie.css";

import Loader from "../Loader/Loader";
const FetchMovie = () => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const [searchValue, setSearchValue] = useState("");
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  let currentMovies;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesBySearch(term));
  }, [term]);

  const handleClick = () => {
    setTerm(searchValue);
    setSearchValue("");
    setCurrentPage(1);
  };

  if (movies?.data?.Search) {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    currentMovies = movies?.data?.Search.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleClick={handleClick}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <MovieList movies={currentMovies} />
        </div>
      )}
      {!isLoading && (
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies?.data?.Search?.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default FetchMovie;
