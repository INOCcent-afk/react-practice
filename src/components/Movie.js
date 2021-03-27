import React from "react";
import { useDispatch } from "react-redux";
import { delMovie } from "../actions/movieActions";

const Movie = ({ name, price, id }) => {
  const dispatch = useDispatch();

  const removeMovie = () => {
    dispatch(delMovie(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={removeMovie}>REMOVE</button>
    </div>
  );
};

export default Movie;
