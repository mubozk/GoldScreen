import axios from "axios";
import { URLS, api_key } from "../constants/config";

const searchMovies = async (searchTerm) => {
  try {
    const encodedQuery = encodeURIComponent(searchTerm);
    const response = await tmdb.get("/search/movie", {
      params: { query: encodedQuery },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { searchMovies };
