import { useState } from "react";
import tmdb from "../api/tmdb";
import useAppHooks from "./app.hooks";
const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, stopLoading } = useAppHooks();

  const searchAPI = async (searchTerm) => {
    try {
      const encodedQuery = encodeURIComponent(searchTerm);
      const response = await tmdb.get("/search/movie", {
        params: { query: encodedQuery },
      });
      setResults(response.data.results);
    } catch (err) {
      setErrorMessage("Something went wrong");
    } finally {
      stopLoading(); 
    }
  };
  return { searchAPI, results, errorMessage, isLoading };
};
export default useResults;
