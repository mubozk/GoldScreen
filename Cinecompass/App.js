import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/navigator";
import { AppProvider } from "./src/contexts/app.context";
import GlobalLoading from "./GlobalLoading";
import { FavouritesProvider } from "./src/contexts/favourites.context";

const App = () => (
  <AppProvider>
    <FavouritesProvider>
      <NavigationContainer>
        <Navigator />
        <GlobalLoading />
      </NavigationContainer>
    </FavouritesProvider>
  </AppProvider>
);

export default App;
