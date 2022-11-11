import React from "react";
import MovieCard from "../components/MovieCard";
import MovieData from "../components/MovieData";

export default function AllMovies(props) {
  return (
    <div className="flex justify-center items-center bg-gray-900">
      <div className=" w-fit bg-gray-500 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-x-6 gap-y-3">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
