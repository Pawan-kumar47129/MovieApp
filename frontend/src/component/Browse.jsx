import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Browse() {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[]);
  return (
    <>
      <Header />
      <div>Browse</div>
    </>
  );
}
export default Browse;
