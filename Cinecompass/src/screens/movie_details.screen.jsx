import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useDetails from "../hooks/movie_details.hooks";
import useAppHooks from "../hooks/app.hooks";
import { ScrollView } from "react-native-gesture-handler";
import FavouriteButton from "../components/favourite.button";
const MovieDetails = ({ route }) => {
  const { movieId } = route.params;
  const { getMovieDetails, movieDetails, errorMessage } = useDetails();
  const { themePalette } = useAppHooks();
  const { container, headerContainer, poster, title, details, overview } =
    styled(themePalette);
  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <View style={container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails.posterPath}`,
        }}
        style={poster}
      />
      <View style={headerContainer}>
        <Text style={title}>{movieDetails.title}</Text>
        <FavouriteButton movie={movieDetails} />
      </View>
      <Text style={details}>{movieDetails.releaseDate}</Text>
      <Text style={details}>
        ✪ {movieDetails.voteAverage.toFixed(2)} / ({movieDetails.voteCount}{" "}
        votes)
      </Text>
      <ScrollView>
        <Text style={overview}>{movieDetails.overview}</Text>
      </ScrollView>
    </View>
  );
};

const styled = (themePalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: themePalette.primary,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    poster: {
      width: "100%",
      height: "50%",
      resizeMode: "contain",
    },
    title: {
      fontSize: 35,
      fontWeight: "bold",
      color: themePalette.cinecompassYellow,
    },
    details: {
      fontSize: 16,
      color: "grey",
    },
    overview: {
      fontSize: 22,
      color: themePalette.text,
    },
  });

export default MovieDetails;
