export const favouritesInitialState = {
  favourites: [],
};

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(
          (favourite) => favourite.movieId !== action.payload.movieId
        ),
      };
    case "LOAD_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
};
