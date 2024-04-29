import { useContext, useEffect } from "react";
import { FavouritesContext } from "../contexts/favourites.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFavourites = () => {
  const {
    favouritesState: { favourites },
    favouritesDispatch,
  } = useContext(FavouritesContext);

  const addFavourite = (movie) => {
    favouritesDispatch({ type: "ADD_FAVOURITE", payload: movie });
  };

  const removeFavourite = (movie) => {
    favouritesDispatch({ type: "REMOVE_FAVOURITE", payload: movie });
  };

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        favouritesDispatch({
          type: "LOAD_FAVOURITES",
          payload: JSON.parse(value),
        });
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return {
    favourites,
    addFavourite,
    removeFavourite,
  };
};

export default useFavourites;
