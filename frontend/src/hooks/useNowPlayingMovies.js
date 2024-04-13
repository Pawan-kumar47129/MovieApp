import axios from "axios"
import {useDispatch} from "react-redux"
import { getNowPlayingMovies } from "../redux/MovieSlice"
import { nowPlayingURL, options } from "../util/constant"
import { useEffect } from "react"

const  useNowPlayingMovies=async()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async()=>{
        try {
            const res=await axios.get(nowPlayingURL,options);
            dispatch(getNowPlayingMovies(res.data.results));
        } catch (error) {
            console.log(err);
        }
    }
    getData();
    },[]);
    
}
export default useNowPlayingMovies;