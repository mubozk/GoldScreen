import React from 'react';
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screens from "./screens";
import useAppHooks from "../hooks/app.hooks";
import { Platform } from "react-native";
import ThemeSwitchButton from "../components/theme_switch.button";
const RootStack = createStackNavigator();

export default ScreensNavigator = () => {
  const { themePalette } = useAppHooks();
  const { headerStyle, headerTitleStyle } = styled(themePalette);

  const screenOptions = {
    headerStyle: headerStyle,
    headerTitleStyle: headerTitleStyle,
    headerTintColor: themePalette.cinecompassYellow,
    headerRight: () => <ThemeSwitchButton />,
  };

  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <RootStack.Screen
        name="Home"
        component={Screens.Search}
        options={{ title: "CineCompass" }}
      />
      <RootStack.Screen
        name="Results"
        component={Screens.SearchResults}
        options={{ title: "CineCompass" }}
      />
      <RootStack.Screen
        name="Details"
        component={Screens.MovieDetails}
        options={{ title: "CineCompass" }}
      />
    </RootStack.Navigator>
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
