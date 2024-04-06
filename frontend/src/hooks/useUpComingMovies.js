import axios from "axios"
import {useDispatch} from "react-redux"
import { getUpComingMovies } from "../redux/MovieSlice"
import { options, upComingMovieURL } from "../util/constant";
const useUpComingMovies=async()=>{
    const dispatch=useDispatch();
    try{
    const res=await axios.get(upComingMovieURL,options);
    dispatch(getUpComingMovies(res.data.results));
    }
    catch(err){
        console.log(err);
    }
}
export default useUpComingMovies;