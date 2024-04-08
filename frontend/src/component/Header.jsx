import React, { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import axios from "axios";
import { API_END_POINT } from "../util/constant";
import toast from "react-hot-toast"
import { setUser } from "../redux/userSlice";
import {useNavigate} from "react-router-dom"
import { getSearchToggle } from "../redux/MovieSlice";
function Header() {
  const user = useSelector((store) => store.app.user);
  const dispatch=useDispatch();
  const [showProfile, setShowProfile] = useState(false);
  const navigate=useNavigate();
  const LogoutHandler= async()=>{
    try{
    const res= await axios.get(`${API_END_POINT}/logout`);
    if(res.data.success){
      toast.success(res.data.message);
      navigate("/")
      dispatch(setUser(null));
    }
    }catch(err){
      toast.error(err.response.data.message);
    }
  }
  const isSearch=useSelector((store)=>store.movie.searchToggle)
  const searchToggleHandler=()=>{
    dispatch(getSearchToggle());
  }
  return (
    <>
      <div className="flex w-full  justify-between bg-slate-400 bg-opacity-80  px-4  mb-2 rounded-lg py-1 box-border fixed top-1 z-50 sm:px-16">
        <img
          className="h-10 w-10 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S0qIPqTk2En23Y0ceUT7zc3tDwHxVA1QlD4GmCfAk75cMbmWfP84QgTQQGi4EnMl008&usqp=CAU"
          alt="logo"
        />
        <>
        {user && (
          <div className="flex gap-x-4 items-center">
            <button 
            onClick={searchToggleHandler}
            className="block bg-red-600 px-2 py-1 text-xl font-normal rounded-lg text-white">
              {isSearch?"Home":"Search Movie"}
            </button>
            <button
              className="block bg-red-600 px-2 py-1 text-xl rounded-[50%] text-blue-800 font-bold"
              onClick={() => {
                setShowProfile(!showProfile);
              }}
            >
              {user && user.fullname.toUpperCase().charAt(0)}
            </button>
          </div>
        )}
        </>
      {user && (
        <div
          className="flex flex-col bg-orange-400 justify-center items-center gap-y-2 px-2 py-4 text-white border-4 border-green-600 rounded-xl mx-4 absolute top-16 right-1 z-20 translate-x-0"
          style={{ display: showProfile?"flex":"none" }}
        >
          <p className="text-xl font-normal">
            Name: {user && user.fullname.toLowerCase()}
          </p>
          <p className="w-full border-b-4"></p>
          <p className="text-xl font-normal">
            Email: {user && user.email.toLowerCase()}
          </p>
          <p className="w-full border-b-4"></p>
          <button 
          className="text-xl underline hover:text-blue-700"
          onClick={LogoutHandler}
          >
            Logout
          </button>
        </div>
      )}
      </div>
    </>
  );
}
export default Header;
