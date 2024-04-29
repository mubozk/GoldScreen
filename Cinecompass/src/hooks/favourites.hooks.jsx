import { useContext, useEffect } from "react";
import { FavouritesContext } from "../contexts/favourites.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../services/authentication.context";
const useFavourites = () => {
  const { user } = useContext(AuthenticationContext);

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

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return {
    favourites,
    addFavourite,
    removeFavourite,
  };
};

export default useFavourites;
