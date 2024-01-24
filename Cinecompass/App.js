import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen.jsx";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";
const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Results: SearchResultsScreen,
    // Details: MovieDetailsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "CineCompass",
      headerStyle: {
        backgroundColor: "#1b1b1b",
        shadowColor: "transparent",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 40,
        color: "#F6C519",
        alignSelf: 'center',
        fontFamily: 'Impact'
      },
    },
  }
);
export default createAppContainer(navigator);
