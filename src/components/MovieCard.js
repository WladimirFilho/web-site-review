import React from "react";
import theGoodNurse from "../assets/theGoodNurse.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieCard(props) {
  return (
    <>
      <div className="card w-cardWidth h-cardHeight m-0">
        <img src={require("../assets/theGoodNurse.jpg")} />
        <div className="flex justify-between p-2 bg-red-200 h-20 items-center">
          <div>
            <h2 className=" text-base font-bold leading-7">The Good Nurse</h2>
            <h6 className=" text-xs">Crime | Drama | Thriller</h6>
          </div>

          <div className=" pr-3">
            <FontAwesomeIcon icon={faStar} width="20px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
