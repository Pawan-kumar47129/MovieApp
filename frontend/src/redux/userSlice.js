import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoding:false,
    },
    reducers:{
        //action
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        setLoding:(state,action)=>{
            state.isLoding=action.payload
        }
    }
});
export const {setUser,setLoding}=userSlice.actions;
export default userSlice.reducer