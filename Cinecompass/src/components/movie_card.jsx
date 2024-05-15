import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MovieCard;
