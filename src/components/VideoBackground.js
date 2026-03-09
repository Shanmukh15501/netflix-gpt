import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";

const VideoBackground = function ({ movieId }) {
  const { fetchError } = useMovieVideo(movieId);
  const trailerId = useSelector((store) => store.movies?.addTrailerInfo);

  if (fetchError) {
    return <p className="px-6 py-24 text-center text-red-500">{fetchError}</p>;
  }

  return (
    <div className="pointer-events-none relative h-[70vh] w-screen bg-black lg:h-auto lg:aspect-video">
      {trailerId && (
        <iframe
          className="absolute inset-0 h-full w-full scale-125 object-cover"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBackground;