import React from "react";
import { Banner_URL } from "../util/constant";
import {useDispatch} from "react-redux";
import { setOpen, setOpenMovieId } from "../redux/MovieSlice";
function MovieChart({movieId,poster}){
    const dispatch=useDispatch();
    if(poster===null) return;
    const handleOpen=()=>{
        dispatch(setOpen(true));
        dispatch(setOpenMovieId(movieId));
    }
    return(
        <div 
        className="w-[15rem] h-40"
        onClick={handleOpen}
        >
         
            <img className="w-[20rem] h-40 block rounded-lg sm:w-full"
            src={`${Banner_URL}/${poster}`} alt="banner not found" />
        </div>
    )
}
export default MovieChart;