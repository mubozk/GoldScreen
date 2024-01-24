import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen.jsx";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";
import { COLORS } from "./constants.jsx";
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
        backgroundColor: COLORS.primary,
        shadowColor: "transparent",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 40,
        color: COLORS.cinecompassYellow,
        alignSelf: 'center',
        fontFamily: 'Impact'
      },
    },
  }
);
export default createAppContainer(navigator);
