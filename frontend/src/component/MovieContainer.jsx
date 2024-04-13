import {useSelector} from "react-redux"
import MovieCatagary from "./MovieCatagary";
function MovieContainer(){
    const movie=useSelector((store)=>store.movie);
    return(
        <div className="mb-16 mt-16 sm:-mt-12">
            <MovieCatagary type={"Popular Movies"} movie={movie.popularMovies} />
            <MovieCatagary type={"Now Playing Movies"} movie={movie.nowPlayingMovies} />
            <MovieCatagary type={"Top Rated Movies"} movie={movie.topRatedMovies} />
            <MovieCatagary type={"UpComming Movies"} movie={movie.upComingMovies} />
        </div>
    )
}
export default MovieContainer