import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import useResults from "../hooks/search.hooks";
import ResultsList from "../components/results_list";
import colors from "../constants/colors";

const SearchResultsScreen = ({ route }) => {
  const { textStyle, loadingContainer } = styled(colors.dark_theme);
  const { searchTerm } = route.params;
  const { searchAPI, results, errorMessage, isLoading } = useResults();
  useEffect(() => {
    if (searchTerm) {
      searchAPI(searchTerm);
    }
  }, [searchTerm]);
  if (isLoading) {
    return (
      <View style={loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <ResultsList title={"results"} results={results} />;
};

const styled = (themePalette) =>
  StyleSheet.create({
    textStyle: {
      marginVertical: 50,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default SearchResultsScreen;
