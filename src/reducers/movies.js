export default (state = { movies: [], favouriteMovies: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    case "FETCH_BY_SEARCH":
      return {
        // ...state,
        movies: action.payload,
      };

    case "FETCH_BY_ID":
      return {
        // ...state,
        movie: action.payload,
      };

    default:
      return state;
  }
};
