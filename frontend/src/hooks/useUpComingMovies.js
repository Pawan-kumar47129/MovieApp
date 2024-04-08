import axios from "axios"
import {useDispatch} from "react-redux"
import { getUpComingMovies } from "../redux/MovieSlice"
import { options, upComingMovieURL } from "../util/constant";
import { useEffect } from "react";
const useUpComingMovies=async()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try{
            const res=await axios.get(upComingMovieURL,options);
            dispatch(getUpComingMovies(res.data.results));
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    },[])
}
export default useUpComingMovies;