import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import useResults from "../hooks/search.hooks";
import ResultsList from "../components/results_list";
import colors from "../constants/colors";

const SearchResultsScreen = ({ route }) => {
  const { textStyle } = styled(colors.dark_theme);
  const { searchTerm } = route.params;
  const { searchAPI, results, errorMessage } = useResults();
  useEffect(() => {
    if (searchTerm) {
      searchAPI(searchTerm);
    }
  }, [searchTerm]);

  return <ResultsList title={"results"} results={results} />;
};

const styled = (themePalette) =>
  StyleSheet.create({
    textStyle: {
      marginVertical: 50,
    },
  });

export default SearchResultsScreen;
