import { useContext } from "react";
import { FavouritesContext } from "../contexts/favourites.context";

const useFavourites = () => {
  const { favouritesState, favouritesDispatch } = useContext(FavouritesContext);

  const addFavourite = (movie) => {
    favouritesDispatch({ type: "ADD_FAVOURITE", payload: movie });
  };

  const removeFavourite = (movie) => {
    favouritesDispatch({ type: "REMOVE_FAVOURITE", payload: movie });
  };

  return {
    favourites: favouritesState.favourites,
    addFavourite,
    removeFavourite,
  };
};

export default useFavourites;