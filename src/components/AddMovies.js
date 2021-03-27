import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../actions/movieActions";

const AddMovies = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addMovie(name, price));
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" value={name} onChange={changeName} />
      <input type="text" name="name" value={price} onChange={changePrice} />
      <button>SUBMIT</button>
    </form>
  );
};

export default AddMovies;
