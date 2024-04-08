import {useDispatch} from "react-redux";
import { getPopularMovies } from "../redux/MovieSlice";

import axios from "axios";
import { options ,popularMovieURL} from "../util/constant";
import { useEffect } from "react";
const usePopularMovies=async()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try{
                const res=await axios.get(popularMovieURL,options);
                dispatch(getPopularMovies(res.data.results));
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    },[])
}
export default usePopularMovies;