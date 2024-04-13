import axios from "axios";
import { useEffect } from "react";
import { options } from "../util/constant";
import {useDispatch} from "react-redux";
import { getTrailerMovie } from "../redux/MovieSlice";
const useMovieById=(movieId)=>{
        const dispatch=useDispatch();
        useEffect(()=>{
            const getMovieById=async()=>{
                try{
                    const res=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
                    const trailer=res?.data?.results?.filter((item)=>{
                        return item.type==="Trailer";
                    })
                    dispatch(getTrailerMovie(trailer.length>0?trailer[0]:res.data.results[0]));
                }catch(err){
                    console.log(err);
                }
            }
            getMovieById();
        },[movieId]);

}
export default useMovieById;