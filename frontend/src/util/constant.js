export const API_END_POINT="http://localhost:8080/api/v1/user";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTQ3OTI1NDAyNGI5ZWIxODQxYzI0MDdjYjU5OTllYyIsInN1YiI6IjY2MTEwNTg5MTEwOGE4MDE3ZDhjYmQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ToOd_NdGxUOCeIVN5SdsefBxql6_vHxEKgjXp4NeKE8'
    }
  };
  export const nowPlayingURL="https://api.themoviedb.org/3/movie/now_playing";
  export const popularMovieURL="https://api.themoviedb.org/3/movie/popular";
  export const topRatedMovieURL="https://api.themoviedb.org/3/movie/top_rated";
  export const upComingMovieURL="https://api.themoviedb.org/3/movie/upcoming";
  export const seachURL='https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=hindi-India&page=1&sort_by=popularity.desc';
  const SearchURL="https://api.themoviedb.org/3/search/movie?query="
  export const Banner_URL="https://image.tmdb.org/t/p/w500"