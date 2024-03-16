import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/navigator";
import { AppProvider } from "./src/contexts/app.context";
import GlobalLoading from "./GlobalLoading";

const App = () => (
  <AppProvider>
    <NavigationContainer>
      <Navigator />
      <GlobalLoading />
    </NavigationContainer>
  </AppProvider>
);

export default App;
