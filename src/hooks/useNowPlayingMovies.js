import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = function () {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(function (store) {
    return store.movies?.nowPlayingMovies;
  });

  const [fetchError, setFetchError] = useState("");

  useEffect(function () {
    if (nowPlayingMovies) {
      return;
    }

    const getNowPlayingMovies = async function () {
      try {
        const url = "https://api.themoviedb.org/3/movie/now_playing";
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();

        if (!data.ok) {
          throw new Error(json.status_message || "Failed to fetch movies");
        }

        dispatch(addNowPlayingMovies(json.results || []));
        setFetchError("");
      } catch (error) {
        setFetchError(error.message || "Failed to fetch movies");
      }
    };

    getNowPlayingMovies();
  }, [dispatch, nowPlayingMovies]);

  return { nowPlayingMovies, fetchError };
};

export default useNowPlayingMovies;