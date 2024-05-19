import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import useAppHooks from "../hooks/app.hooks";
import NavigationActions from "../navigation/navigation_actions";

const MovieCard = ({ movie }) => {
  const { themePalette } = useAppHooks();
  const { cardContainer, image, title } = styled(themePalette);
  const { navigatePush } = NavigationActions();

  return (
    <TouchableOpacity
      style={cardContainer}
      onPress={() => navigatePush("Details", { movieId: movie.id })}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={image}
      />
      <Text style={title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    cardContainer: {
      width: 140,
      marginRight: 10,
      borderRadius: 8,
      overflow: "hidden",
      elevation: 5,
      backgroundColor: themePalette.primary,
      shadowOffset: { width: 0, height: 3 },
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 4,
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
      textAlign: "center",
      color: themePalette.text,
    },
  });

export default MovieCard;
