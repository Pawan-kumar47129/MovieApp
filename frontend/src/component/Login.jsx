import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast from "react-hot-toast";
import { API_END_POINT } from "../util/constant";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const swap = () => {
    setIsLogin(!isLogin);
  };
  const getInputData = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const loginData = { email, password };
        const res = await axios.post(`${API_END_POINT}/login`, loginData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        navigate("/browse");
      } catch (err) {
        console.log("login", err);
        toast.error(err.response.data.message);
      }
      // for registor
    } else {
      try {
        const regData = { fullname, email, password };
        console.log(regData);
        const res = await axios.post(`${API_END_POINT}/registor`, regData);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
        console.log(res);
      } catch (err) {
        toast.error(err.response.data.message);
        console.log("registor", err);
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg")`,
        }}
      >
        <Header />
        <div className="flex items-center justify-center h-[80vh]">
          <form
            onSubmit={getInputData}
            className="flex flex-col justify-center items-center h-auto w-auto px-8 py-8 bg-slate-950  opacity-90  gap-4 rounded-lg"
          >
            <h1 className="text-3xl text-white font-bold mb-2">
              {`${isLogin ? "Login" : "Signup"}`}
            </h1>
            {!isLogin && (
              <input
                className="px-4 py-2 w-[20rem] outline-none rounded-lg"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="FullName"
              />
            )}
            <input
              className="px-4 py-2 w-[20rem] outline-none rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              className="px-4 py-2 w-[20rem] outline-none rounded-lg"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 text-white w-full py-1 rounded-lg hover:bg-indigo-600">
              {isLogin ? "login" : "signup"}
            </button>
            <p className="text-white ">
              {isLogin ? "New to Netflix?" : "Aready have an account?"}
              <span
                onClick={swap}
                className="ml-2 text-blue-800 text-lg cursor-pointer"
              >
                {isLogin ? "signup" : "login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
