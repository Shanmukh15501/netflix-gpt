import MovieCard from "./MovieCard";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MovieList = ({ title }) => {

  const { nowPlayingMovies } = useNowPlayingMovies();

  if (!nowPlayingMovies?.length) {
    return null;
  }

  return (
    <div className="bg-black text-white">
      <h1 className="px-2 py-4 text-2xl font-bold">{title}</h1>
      <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 pb-4">
        {nowPlayingMovies.map((movie) => (
          <MovieCard 
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

    </div>
  );
};

export default MovieList;