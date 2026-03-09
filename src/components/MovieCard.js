import React from "react";
import { TMDB_PHOTO_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="shrink-0">
      <img
        className="w-[230px] rounded-md bg-black p-2"
        src={TMDB_PHOTO_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;