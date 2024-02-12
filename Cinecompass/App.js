import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/search.screen";
import SearchResultsScreen from "./src/screens/search_results.screen.jsx";
import colors from "./src/constants/colors.jsx";
const { dark_theme } = colors;
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
    },
  }
);
export default createAppContainer(navigator);
