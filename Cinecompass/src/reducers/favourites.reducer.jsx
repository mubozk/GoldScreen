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
            (favourite) => favourite.movieID !== action.payload.movieId
          ),
        };
      default:
        return state;
    }
  };