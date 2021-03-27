const initState = {
  movies: [
    {
      name: "Harry Potter",
      price: 14,
      id: 123,
    },
    {
      name: "Naruto Shippuden",
      price: 20,
      id: 1234,
    },
    {
      name: "One Piece",
      price: 30,
      id: 12345,
    },
  ],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "DEL_MOVIE":
      return {
        ...state,
        movies: [
          ...state.movies.filter((movie) => movie.id !== action.payload),
        ],
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
