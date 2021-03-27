export const loadMovies = () => async (dispatch) => {
  dispatch({
    type: "GET_MOVIES",
  });
};

export const addMovie = (name, price) => {
  return {
    type: "ADD_MOVIE",
    payload: {
      name: name,
      price: price,
      id: Math.floor(Math.random() * 100 + 1),
    },
  };
};
export const delMovie = (id) => {
  return {
    type: "DEL_MOVIE",
    payload: id,
  };
};
