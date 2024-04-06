import {useDispatch} from "react-redux";
import { getPopularMovies } from "../redux/MovieSlice";

import axios from "axios";
import { options ,popularMovieURL} from "../util/constant";
const usePopularMovies=async()=>{
    const dispatch=useDispatch();
    try{
        const res=await axios.get(popularMovieURL,options);
        dispatch(getPopularMovies(res.data.results));
    }
    catch(err){
        console.log(err);
    }
}
export default usePopularMovies;