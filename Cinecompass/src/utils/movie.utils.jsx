export function createMovieFromApiData(data) {
  return {
    id: data.id,
    title: data.title,
    posterPath: data.poster_path,
    releaseDate: data.release_date,
    voteAverage: data.vote_average,
  };
}

export function mapApiResponseToMovies(apiResponse) {
  return apiResponse.results.map(createMovieFromApiData);
}
