import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import SearchBar from "../components/search_bar";
import NavigationActions from "../navigation/navigation_actions";
import useAppHooks from "../hooks/app.hooks";
const SearchScreen = () => {
  const { themePalette, toggleTheme } = useAppHooks();
  const [query, setQuery] = useState("");
  const { backgroundStyle } = styled(themePalette);
  const { navigatePush } = NavigationActions();

  return (
    <View style={backgroundStyle}>
      <SearchBar
        term={query}
        onTermChange={setQuery}
        onTermSubmit={() => navigatePush("Results", { searchTerm: query })}
      />
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
