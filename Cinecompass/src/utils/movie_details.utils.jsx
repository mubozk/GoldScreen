export function transformMovieDetails(data) {
  return {
    id: data.id,
    title: data.title,
    posterPath: data.poster_path,
    releaseDate: data.release_date,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
    overview: data.overview,
  };
}
