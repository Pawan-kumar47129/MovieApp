import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector((store) => store.app.user);
  return (
    <div className="flex justify-between bg-slate-400  px-4  mb-2 rounded-lg py-1 box-border ">
      <img
        className="h-10 w-10 rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S0qIPqTk2En23Y0ceUT7zc3tDwHxVA1QlD4GmCfAk75cMbmWfP84QgTQQGi4EnMl008&usqp=CAU"
        alt="logo"
      />
      {user && (
        <div className="flex gap-x-4 items-center">
          <div className="flex items-center">
            <IoIosArrowDropdownCircle />
            <h1 className="text-xl font-medium text-white">{user.fullname}</h1>
          </div>
          <button className="block bg-red-600 px-2 py-1 text-xl font-normal rounded-lg text-white">
            logout
          </button>
          <button className="block bg-red-600 px-2 py-1 text-xl font-normal rounded-lg text-white">
            search movie
          </button>
        </div>
      )}
    </div>
  );
}
export default Header;
