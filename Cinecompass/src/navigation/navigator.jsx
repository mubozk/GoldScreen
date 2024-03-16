import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './screens';
import colors from '../constants/colors';

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
      {/* Add more screens here with similar structure */}
    </RootStack.Navigator>
  );
};

export default ScreensNavigator;
