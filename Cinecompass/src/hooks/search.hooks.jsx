import { useState } from "react";
import tmdb from "../api/tmdb";
const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchAPI = async (searchTerm) => {
    setIsLoading(true);

    try {
      const encodedQuery = encodeURIComponent(searchTerm);
      const response = await tmdb.get("/search/movie", {
        params: {
          query: encodedQuery,
        },
      });
      setResults(response.data.results);
    } catch (err) {
      setErrorMessage("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return { searchAPI, results, errorMessage, isLoading };
};
export default useResults;
