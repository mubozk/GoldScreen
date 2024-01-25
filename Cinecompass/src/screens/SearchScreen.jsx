import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { COLORS } from "../../constants";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default SearchScreen = () => {
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
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
