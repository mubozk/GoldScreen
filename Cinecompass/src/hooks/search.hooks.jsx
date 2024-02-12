import { useState } from "react";
import tmdb from "../api/tmdb";
const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchAPI = async (searchTerm) => {
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
    }
  };
  return { searchAPI, results, errorMessage };
};
export default useResults;
