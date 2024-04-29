import { useState } from "react";
import { mapApiResponseToMovies } from "../utils/movie.utils";
import tmdb from "../api/tmdb";
import useAppHooks from "./app.hooks";
const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, stopLoading, toggleLoading } = useAppHooks();

  const searchAPI = async (searchTerm) => {
    toggleLoading();
    try {
      const encodedQuery = encodeURIComponent(searchTerm);
      const response = await tmdb.get("/search/movie", {
        params: { query: encodedQuery },
      });
      const mappedResults = mapApiResponseToMovies(response.data);
      setResults(mappedResults);
    } catch (err) {
      setErrorMessage("Something went wrong");
    } finally {
      stopLoading();
    }
  };
  return { searchAPI, results, errorMessage, isLoading };
};
export default useResults;
