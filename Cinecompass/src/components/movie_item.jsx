import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import useAppHooks from "../hooks/app.hooks";
import { getStarsFromRating } from "../utils/star_rating.utils";
const MovieItem = ({ movie, onPress }) => {
  const { themePalette } = useAppHooks();
  const { container, details, title, releaseDate, rating, icon } =
    styled(themePalette);
  const posterImageUrl = movie.posterPath
    ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
    : "path-to-default-image";

  return (
    <Pressable onPress={() => onPress(movie.id)}>
      <View style={container}>
        <Image source={{ uri: posterImageUrl }} style={icon} />
        <View style={details}>
          <Text style={title}>{movie.title}</Text>
          <Text style={releaseDate}>{movie.releaseDate}</Text>
        </View>
        <Text style={rating}>{getStarsFromRating(movie.voteAverage)}</Text>
      </View>
    </Pressable>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      height: 120,
    },
    icon: {
      width: 50,
      height: 100,
      marginRight: 10,
    },
    details: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: themePalette.text,
    },
    releaseDate: {
      fontSize: 12,
      color: "grey",
    },
    rating: {
      fontWeight: "bold",
      color: themePalette.text,
    },
  });


export default MovieItem;
