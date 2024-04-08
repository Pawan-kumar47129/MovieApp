import axios from "axios";
import {useDispatch} from "react-redux";
import { options, topRatedMovieURL } from "../util/constant";
import { getTopRatedMovies } from "../redux/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies=async()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await axios.get(topRatedMovieURL,options);
                dispatch(getTopRatedMovies(res.data.results));
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])
}
export default useTopRatedMovies;