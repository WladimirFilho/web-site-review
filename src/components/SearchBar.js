import React from "react";

function SearchBar(props) {
  return (
    <div className=" w-full h-72 bg-gray-900 flex flex-col justify-center items-center border-t-2 border-yellow-400">
      <h1 className=" text-white font-semibold text-2xl">
        Looking for something special? Search our reviews.
      </h1>
      <div className=" h-8"></div>
      <input
        className=" font-semibold text-center px-52 py-4 rounded-full"
        type="text"
        name="search"
        placeholder="Find You Favorit Movie"
      />
    </div>
  );
}

export default SearchBar;
