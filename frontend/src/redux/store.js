import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./MovieSlice.js"
const store=configureStore({
    reducer:{
        app:userReducer ,
        movie:movieReducer
    }
});

export default store;