import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/search_bar";
import { COLORS } from "../constants/config";
import useResults from "../hooks/search.hooks";
import ResultsList from "../components/results_list";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const { searchAPI, results, errorMessage } = useResults();
  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={query}
        onTermChange={setQuery}
        onTermSubmit={() => searchAPI(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title={"results"} results={results} />
    </View>
  );
};
export default SearchScreen;
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
