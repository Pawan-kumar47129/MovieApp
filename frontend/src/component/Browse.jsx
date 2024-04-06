import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies";

function Browse() {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useEffect(() => {
    if (!user) {
      navigate("/browse");
    }
  },[]);
  return (
    <>
      <Header />
      <div>
      <MainContainer/>
      <MovieContainer/>
      </div>
    </>
  );
}
export default Browse;
