import { Link } from "react-router-dom";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import React from "react";
function Bottom() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center bg-slate-400 px-4 gap-4 pb-8 pt-2">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img
              className="h-10 w-10 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S0qIPqTk2En23Y0ceUT7zc3tDwHxVA1QlD4GmCfAk75cMbmWfP84QgTQQGi4EnMl008&usqp=CAU"
              alt="logo"
            />
            <Link className="font-blod text-xl " to="/Browse">
              <h2 className="text-xl font-bold">MBMovies</h2>
            </Link>
          </div>
          <div className="flex gap-2">
            <a
              className="text-lg font-bold"
              href="http://github.com/Pawan-kumar47129" target="_blank"
            >
              <FaGithubSquare />
            </a>
            <a href="https://www.instagram.com/pawank47129?igsh=bXp4dTNuMWlzcDQ0" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/in/pawankumar47129" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <Link
              className="text-xl font-medium text-white hover:underline"
              to="/Browse"
            >
              Home
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              to="/About"
            >
              About
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              to="/Contect"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <Link
              className="text-xl font-medium text-white hover:underline"
            >
              Help Centre
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
            >
              Media Centre
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              
            >
              jobs
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              
            >
              Terms of Use
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <Link
              className="text-xl font-medium text-white hover:underline"
            >
              Ways to Watch
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
            >
              Privacy
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              
            >
              Speed Test
            </Link>
            <Link
              className="text-xl font-medium text-white hover:underline"
              
            >
              Only on MBMovie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bottom;
