import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import useResults from "../hooks/search.hooks";
import ResultsList from "../components/results_list";
import useAppHooks from "../hooks/app.hooks";

const SearchResultsScreen = ({ route }) => {
  const { themePalette } = useAppHooks();
  const { container } = styled(themePalette);
  const { searchTerm } = route.params;
  const { searchAPI, results, errorMessage } = useResults();
  useEffect(() => {
    if (searchTerm) {
      searchAPI(searchTerm);
    }
  }, [searchTerm]);

  return (
    <View style={container}>
      <ResultsList results={results} />
    </View>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themePalette.primary,
    },
  });

export default SearchResultsScreen;
