import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import useDetails from "../hooks/movie_details.hooks";
const MovieDetails = ({ route }) => {
  const { movieId } = route.params;
  const { getMovieDetails, movieDetails, errorMessage } = useDetails();

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails.posterPath}`,
        }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Button
        title="★"
        onPress={() => {
          /* Handle Favorite */
        }}
      />
      <Text style={styles.releaseDate}>{movieDetails.releaseDate}</Text>
      <Text>
        {movieDetails.voteAverage.toFixed(2)} ({movieDetails.voteCount} votes)
      </Text>
      <Text>{movieDetails.overview}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  poster: {
    width: "100%",
    height: "50%", // Adjust as needed
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  releaseDate: {
    fontSize: 16,
    color: "grey",
  },
});

export default MovieDetails;
