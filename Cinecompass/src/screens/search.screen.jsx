import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/search_bar";
import NavigationActions from "../navigation/navigation_actions";
import useAppHooks from "../hooks/app.hooks";
import useFavourites from "../hooks/favourites.hooks";
import ResultsList from "../components/results_list";
import { AuthenticationContext } from "../contexts/authentication.context";
import { useContext } from "react";
import MovieCard from "../components/movie_card";
import useMovieLists from "../hooks/movies_lists.hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SearchScreen = () => {
  const { themePalette, toggleTheme } = useAppHooks();
  const [query, setQuery] = useState("");
  const { backgroundStyle, container, header, logoutIcon, flatList } =
    styled(themePalette);
  const { navigatePush } = NavigationActions();
  const { favourites } = useFavourites();
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);
  const { popularMovies, upcomingMovies } = useMovieLists();
  useEffect(() => {
    console.log("favourites", favourites);
  }, [favourites]);

  const onTermSubmit = (query) => {
    navigatePush("Results", { searchTerm: query });
    setIsFavouritesToggled(false);
  };
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View style={backgroundStyle}>
      <SearchBar
        term={query}
        onTermChange={setQuery}
        onTermSubmit={() => onTermSubmit(query)}
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {!isFavouritesToggled ? (
        <>
          <Text style={header}>Popular Movies</Text>
          <FlatList
            horizontal
            data={popularMovies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            style={flatList}
          />
          <Text style={header}>Upcoming Movies</Text>
          <FlatList
            horizontal
            data={upcomingMovies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            style={flatList}
          />
        </>
      ) : (
        <ResultsList results={favourites} />
      )}
      <TouchableOpacity style={logoutIcon} onPress={() => onLogout()}>
        <MaterialCommunityIcons name="door-open" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchScreen;
const styled = (themePalette) =>
  StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      backgroundColor: themePalette.primary,
    },
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fff",
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 10,
      marginTop: 10,
    },
    flatList: {
      marginBottom: 10,
    },
    logoutIcon: {
      position: "absolute",
      bottom: 20,
      right: 20,
    },
  });
