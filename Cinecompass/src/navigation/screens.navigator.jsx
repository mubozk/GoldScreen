import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./screens";
import useAppHooks from "../hooks/app.hooks";
import { Platform } from "react-native";
import ThemeSwitchButton from "../components/theme_switch.button";
import { FavouritesProvider } from "../contexts/favourites.context";
const RootStack = createStackNavigator();

const ScreensNavigator = () => {
  const { themePalette } = useAppHooks();
  const { headerStyle, headerTitleStyle } = styled(themePalette);

  const screenOptions = {
    headerStyle: headerStyle,
    headerTitleStyle: headerTitleStyle,
    headerTintColor: themePalette.cinecompassYellow,
    headerRight: () => <ThemeSwitchButton />,
  };

  const options = {
    title: "CineCompass",
  };

  return (
    <FavouritesProvider>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        <RootStack.Screen
          name="Home"
          component={Screens.Search}
          options={{ ...options }}
        />
        <RootStack.Screen
          name="Results"
          component={Screens.SearchResults}
          options={{ ...options }}
        />
        <RootStack.Screen
          name="Details"
          component={Screens.MovieDetails}
          options={{ ...options }}
        />
      </RootStack.Navigator>
    </FavouritesProvider>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    headerStyle: {
      backgroundColor: themePalette.primary,
      shadowColor: "transparent",
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 40,
      color: themePalette.cinecompassYellow,
      alignSelf: "center",
      fontFamily: Platform.OS == "ios" ? "Impact" : null,
    },
  });
export default ScreensNavigator;
