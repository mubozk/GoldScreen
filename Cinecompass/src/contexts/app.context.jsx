import React, { createContext, useReducer } from "react";
import { appReducer, appInitialState } from "../reducers/app.reducer";

const AppContext = createContext();
const AppContextDispatch = createContext();

const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);
  return (
    <AppContext.Provider value={{ appState }}>
      <AppContextDispatch.Provider value={{ appDispatch }}>
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext, AppContextDispatch };
