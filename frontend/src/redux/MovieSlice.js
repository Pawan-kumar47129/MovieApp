import {createSlice} from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,

    },
    //actions
    reducers:{
        getNowPlayingMovies:(state,action)=>{
           state.nowPlayingMovies=action.payload; 
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies=action.payload; 
         },
         getTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
         },
         getUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
         }
    }
})
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer 