import axios from "axios";
import {useDispatch} from "react-redux";
import { options, seachURL, topRatedMovieURL } from "../util/constant";
import { getTopRatedMovies } from "../redux/MovieSlice";

const useTopRatedMovies=async()=>{
    const dispatch=useDispatch();
    try {
        const res=await axios.get(topRatedMovieURL,options);
        dispatch(getTopRatedMovies(res.data.results));
        const search=await axios.get(seachURL,options);
        console.log(search.data.results);
    } catch (error) {
        console.log(error);
    }
}
export default useTopRatedMovies;