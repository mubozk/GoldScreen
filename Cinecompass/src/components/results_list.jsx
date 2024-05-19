import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MovieItem from "./movie_item";
import NavigationActions from "../navigation/navigation_actions";
import useAppHooks from "../hooks/app.hooks";

const ResultsList = ({ results }) => {
  const { themePalette } = useAppHooks();
  const { container } = styled(themePalette);
  const { navigatePush } = NavigationActions();
  const onMoviePress = (movieId) => {
    navigatePush("Details", { movieId });
  };
  return (
    <View style={container}>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <MovieItem movie={item} onPress={onMoviePress} />;
        }}
      />
    </View>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themePalette.primary,
      padding: 10,
    },
  });

export default ResultsList;
