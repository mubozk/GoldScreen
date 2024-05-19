import { useState, useEffect } from "react";
import tmdb from "../api/tmdb";
import useAppHooks from "./app.hooks";

const useMovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, toggleLoading, stopLoading } = useAppHooks();

  const fetchPopularMovies = async () => {
    toggleLoading();
    try {
      const response = await tmdb.get("/movie/popular");
      setPopularMovies(response.data.results);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch popular movies: " + error.message);
    } finally {
      stopLoading();
    }
  };

  const fetchUpcomingMovies = async () => {
    toggleLoading();
    try {
      const response = await tmdb.get("/movie/upcoming");
      setUpcomingMovies(response.data.results);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch upcoming movies: " + error.message);
    } finally {
      stopLoading();
    }
  };

  // Fetch data on mount and when the API key changes
  useEffect(() => {
    fetchPopularMovies();
    fetchUpcomingMovies();
  }, []);

  return { popularMovies, upcomingMovies, errorMessage, isLoading };
};

export default useMovieLists;
