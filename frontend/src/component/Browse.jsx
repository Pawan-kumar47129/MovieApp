import React from "react";
import Header from "./Header";
import Footer from "./Bottom"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies";
import SearchBox from "./SearchBox"
// import Bootom from "./Bottom" 
function Browse() {
  const user = useSelector((store) => store.app.user);
  const isSearch=useSelector((store)=>store.movie.searchToggle);
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[]);
  return (
    <>
      <Header />
      <div className="bg-slate-500">
        {
          isSearch?<SearchBox/>:
        <>
      <MainContainer/>
      <MovieContainer/>
      </>
      }
      <Footer/>
      </div>
    </>
  );
}
export default Browse;
