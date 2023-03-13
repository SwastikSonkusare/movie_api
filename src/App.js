import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movie from "./components/Movie/Movie";
import FetchMovie from "./components/FetchMovie/FetchMovie";
import Favourites from "./components/Favourites/Favourites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<FetchMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
