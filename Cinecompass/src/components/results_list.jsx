import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../constants/colors";
import MovieItem from "./movie_item";
import NavigationActions from "../navigation/navigation_actions";

const ResultsList = ({ title, results }) => {
  const { titleStyle } = styled(colors.dark_theme);
  const { navigatePush } = NavigationActions();
  const onMoviePress = (movieId) => {
    navigatePush("Details", { movieId });
  };
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>

      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <MovieItem movie={item} onPress={onMoviePress} />;
        }}
      />
    </View>
  );
};
const styled = (themePalette) =>
  StyleSheet.create({
    titleStyle: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
export default ResultsList;
