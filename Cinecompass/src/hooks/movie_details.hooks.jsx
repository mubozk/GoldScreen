import { useState } from "react";
import tmdb from "../api/tmdb";
import useAppHooks from "./app.hooks";
import { transformMovieDetails } from "../utils/movie_details.utils";

const useDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { toggleLoading, stopLoading } = useAppHooks();

  const getMovieDetails = async (movieId) => {
    toggleLoading();
    try {
      const response = await tmdb.get(`/movie/${movieId}`);
      setMovieDetails(transformMovieDetails(response.data));
    } catch (err) {
      setErrorMessage("Something went wrong while fetching movie details");
    } finally {
      stopLoading();
    }
  };

  return { getMovieDetails, movieDetails, errorMessage };
};

export default useDetails;
