import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import SearchBar from "../components/search_bar";
import NavigationActions from "../navigation/navigation_actions";
import useAppHooks from "../hooks/app.hooks";
import useFavourites from "../hooks/favourites.hooks";
import ResultsList from "../components/results_list";
const SearchScreen = () => {
  const { themePalette, toggleTheme } = useAppHooks();
  const [query, setQuery] = useState("");
  const { backgroundStyle } = styled(themePalette);
  const { navigatePush } = NavigationActions();
  const { favourites } = useFavourites();
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);
  useEffect(() => {
    console.log("favourites", favourites);
  }, [favourites]);

  const onTermSubmit = (query) => {
    navigatePush("Results", { searchTerm: query });
    setIsFavouritesToggled(false);
  };

  return (
    <View style={backgroundStyle}>
      <SearchBar
        term={query}
        onTermChange={setQuery}
        onTermSubmit={() => onTermSubmit(query)}
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {isFavouritesToggled && <ResultsList results={favourites} />}
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
  });
