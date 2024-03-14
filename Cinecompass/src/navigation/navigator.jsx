import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./screens";
import Paths from "./paths";
import colors from "../constants/colors";

const { dark_theme } = colors;
const RootStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: dark_theme.primary,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 40,
    color: dark_theme.cinecompassYellow,
    alignSelf: "center",
    fontFamily: "Impact",
  },
};

const ScreensNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={Paths.home}
      screenOptions={screenOptions}
    >
      <RootStack.Screen
        name={Paths.home}
        component={Screens.HomeScreen}
        options={{ title: "CineCompass" }}
      />
      <RootStack.Screen
        name={Paths.results}
        component={Screens.SearchResultsScreen}
        options={{ title: "CineCompass" }}
      />
      {/* Add more screens here with similar structure */}
    </RootStack.Navigator>
  );
};

export default ScreensNavigator;
