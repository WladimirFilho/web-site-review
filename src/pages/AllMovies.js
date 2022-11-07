import React from "react";
import MovieCard from "../components/MovieCard";
import MovieData from "../components/MovieData";

export default function AllMovies(props) {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-fit bg-gray-500 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-0">
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
