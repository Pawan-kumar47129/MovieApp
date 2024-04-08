import {createSlice} from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        searchToggle:false,
        trailerMovie:null,
        open:false,
        openMovieId:'',

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
         },
         getSearchToggle:(state,action)=>{
            state.searchToggle=!state.searchToggle;
         },
         getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload
         },
         setOpen:(state,action)=>{
            state.open=action.payload;
         },
         setOpenMovieId:(state,action)=>{
            state.openMovieId=action.payload;
         }
    }
})
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpComingMovies,getSearchToggle,getTrailerMovie,setOpen,setOpenMovieId} = movieSlice.actions;
export default movieSlice.reducer 