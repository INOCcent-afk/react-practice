import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieActions";

const Nav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { movies } = useSelector((state) => state.movies);

  return (
    <div>
      <h3>DAVE INOC</h3>
      <p>NO. of items: {movies.length}</p>
    </div>
  );
};

export default Nav;
