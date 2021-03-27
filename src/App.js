import React, { useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovies";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "./actions/movieActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { movies } = useSelector((state) => state.movies);

  return (
    <div className="App">
      <Nav />
      <AddMovie />
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id}
          id={movie.id}
        />
      ))}
    </div>
  );
}

export default App;
