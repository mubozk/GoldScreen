import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MovieItem = ({ movie }) => {
  const posterImageUrl = movie.posterPath
    ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
    : "path-to-default-image";

  return (
    <View style={styles.container}>
      <Image source={{ uri: posterImageUrl }} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>{movie.releaseDate}</Text>
      </View>
      <Text style={styles.rating}>{movie.voteAverage.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  releaseDate: {
    fontSize: 12,
    color: "grey",
  },
  rating: {
    fontWeight: "bold",
  },
});

export default MovieItem;
