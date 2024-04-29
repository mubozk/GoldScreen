import React, { createContext, useReducer } from "react";
import { favouritesReducer, favouritesInitialState } from "../reducers/favourites.reducer";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favouritesState, favouritesDispatch] = useReducer(favouritesReducer, favouritesInitialState);

  return (
    <FavouritesContext.Provider value={{ favouritesState, favouritesDispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
};