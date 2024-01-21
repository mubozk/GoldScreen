import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./src/screens/SearchScreen.jsx";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";
const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Results: SearchResultsScreen,
    // Details: MovieDetailsScreen,
  },
  {
    initialRouteName: "Results",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
