import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import useFavourites from "../hooks/favourites.hooks";
import useAppHooks from "../hooks/app.hooks";
import { Fontisto } from "@expo/vector-icons";
const FavouriteButton = ({ movie }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const isFavourite = favourites.some((favourite) => favourite.id === movie.id);
  const { favouriteButton } = styled();
  const { themePalette } = useAppHooks();

  return (
    <TouchableOpacity
      style={favouriteButton}
      onPress={() =>
        isFavourite ? removeFavourite(movie) : addFavourite(movie)
      }
    >
      <Fontisto
        name="favorite"
        size={45}
        color={isFavourite ? themePalette.cinecompassYellow : "white"}
      />
    </TouchableOpacity>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    favouriteButton: {
      position: "absolute",
      top: 10,
      right: 10,
    },
  });
export default FavouriteButton;
