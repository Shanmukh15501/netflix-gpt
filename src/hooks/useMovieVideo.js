import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerInfo } from "../utils/movieSlice";


const useMovieVideo = function (movieId) {
  const [fetchError, setFetchError] = useState("");
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!movieId) {
        return;
      }

      const getVideoData = async function () {
        try {
          const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
          const data = await fetch(url, API_OPTIONS);
          const json = await data.json();

          if (!data.ok) {
            throw new Error(json.status_message || "Failed to fetch Movie Info");
          }

          const filter_movie_trailer = json.results.filter(function (video) {
            return video.type === "Trailer";
          });

          const trailer = filter_movie_trailer.length ? filter_movie_trailer[0] : json.results[0];
          
          setFetchError("");
          dispatch(addTrailerInfo(trailer?.key || null));
        } catch (error) {
          setFetchError(error.message || "Failed to fetch movies");
        }
      };

      getVideoData();
    },
    [dispatch, movieId],
  );

  return { fetchError };
};

export default useMovieVideo;
