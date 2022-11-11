import React from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../pages/Login";

export default function Navigation() {
  return (
    <div className="fullWithWrapper w-full bg-gray-900 flex justify-center sticky top-0 z-30">
      <div className="w-full mx-16 h-20 bg-gray-900 content-center">
        <ul className="flex flex-row justify-between content-center items-center h-16">
          <div className="">
            <Link to="/">
              <li className=" text-white font-semibold text-5xl">
                Movie Review
              </li>
            </Link>
          </div>
          <div className="flex flex-row">
            <Link to="/allmovies">
              <li className=" text-white ml-4">All Movies</li>
            </Link>
            <Link to="/wishlist">
              <li className=" text-white ml-4">WishList</li>
            </Link>
            <Link to="/login">
              <li className=" text-white ml-4">Log-In</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
