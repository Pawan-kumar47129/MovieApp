//import axios from "axios";
import MovieChart from "./MovieChart";
// import {
//   nowPlayingURL,
//   options,
//   popularMovieURL,
//   topRatedMovieURL,
//   upComingMovieURL,
// } from "../util/constant";
// import { useEffect, useId, useState } from "react";

function MovieCatagary({ type, movie }) {
  //   const [popularData, setPopularData] = useState([]);
  //   const [topRatedData, setTopRatedData] = useState([]);
  //   const [upComingData, setUpcomingData] = useState([]);
  //   const [nowPlayingData, setNowPlayingData] = useState([]);
  //   async function output() {
  //     const popular = await axios.get(popularMovieURL, options);
  //     setPopularData(popular.data.results);
  //     const playing = await axios.get(nowPlayingURL, options);
  //     setNowPlayingData(playing.data.results);
  //     const topRated = await axios.get(topRatedMovieURL, options);
  //     setTopRatedData(topRated.data.results);
  //     const upcoming = await axios.get(upComingMovieURL, options);
  //     setUpcomingData(upcoming.data.results);
  //   }
  //   useEffect(() => {
  //     output();
  //   }, []);
  //const id = useId();
  return (
    <>
      <div style={{ marginTop: type == "Popular Movies" ? "-10rem" : "3px" }}>
        <h1 className="text-2xl text-white text-center font-bold bg-green-800 mx-4 rounded-lg mb-4 relative z-20 my-4">
          {type}
        </h1>
        <div className="flex overflow-x-auto no-scrollbar">
          <div className="flex gap-8 justify-center mt-4">
            {movie?.map((movie) => (
              <MovieChart
                key={movie.id}
                movieId={movie.id}
                poster={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieCatagary;
