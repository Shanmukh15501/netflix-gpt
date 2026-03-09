import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  const { nowPlayingMovies } = useNowPlayingMovies();

  if (!nowPlayingMovies?.length) {
    return null;
  }

  const mainMovie = nowPlayingMovies[0];
  const { original_title, id, overview } = mainMovie;

  return (
    <div className="relative w-screen overflow-hidden bg-black lg:aspect-video">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
