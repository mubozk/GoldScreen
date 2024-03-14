import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./src/context/ThemeContext";
import Navigator from "./src/navigation/navigator";

const App = () => (
  <ThemeProvider>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
