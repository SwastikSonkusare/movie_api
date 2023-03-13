import axios from "axios";

export const getMoviesBySearch = (term) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const data = await axios.get(
      `http://www.omdbapi.com/?s=${term}&apikey=${process.env.REACT_APP_MOVIE_KEY}`
    );

    dispatch({ type: "STOP_LOADING" });

    dispatch({ type: "FETCH_BY_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_MOVIE_KEY}`
    );

    dispatch({ type: "STOP_LOADING" });

    dispatch({ type: "FETCH_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};
