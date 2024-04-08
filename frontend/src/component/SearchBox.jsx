import { useState } from "react";
import axios from "axios";
import { options } from "../util/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoding } from "../redux/userSlice";
import MovieChart from "./MovieChart";

function SearchBox() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => {
    store.app.isLoading;
  });
  const [searchMovie, setSearchMovie] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showNoData,setNoData]=useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoding(true));
    console.log(searchMovie);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie.toLowerCase()}&include_adult=false&language=en-US&page=1,2`,
        options
      );
      console.log(res.data.results);
      const movies = res.data?.results;
      setSearchData(movies);
      if(movies.length==0){
        setNoData(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoding(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="mt-20 mx-auto bg-white">
        <form onSubmit={submitHandler} className="flex justify-center">
          <div className="flex justify-between px-2 py-1  bg-white h-auto w-[30rem] border-2 border-gray-400 rounded-lg">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="px-2 outline-none rounded-lg w-[80%] h-auto text-xl"
              type="text"
              required
              placeholder="search movie..."
            />
            <button
              className="px-3 rounded-lg bg-red-600 text-white w-auto h-8 hover:bg-opacity-80"
              type="submit"
            >
              {!isLoading ? "search" : "loading.."}
            </button>
          </div>
        </form>
      </div>
      <div>
        {showNoData && (
          <h1
            className={`${
              searchData.length > 1 ? "text-white" : "text-black"
            }text-xl text-center bg-white`}
          >
            No Data found releted to
          </h1>
        )}
        <div className="flex flex-wrap pt-4 justify-center items-center gap-4 bg-white">
          {searchData &&
            searchData?.map((movie) => {
              return (
                <MovieChart
                  key={movie.id}
                  movieId={movie.id}
                  poster={movie.poster_path}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
export default SearchBox;
