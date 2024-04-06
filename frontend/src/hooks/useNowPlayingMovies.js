import axios from "axios"
import {useDispatch} from "react-redux"
import { getNowPlayingMovies } from "../redux/MovieSlice"
import { nowPlayingURL, options } from "../util/constant"

const  useNowPlayingMovies=async()=>{
    const dispatch=useDispatch();
    try {
        const res=await axios.get(nowPlayingURL,options);
        dispatch(getNowPlayingMovies(res.data.results));

    } catch (error) {
        
    }
}
export default useNowPlayingMovies;