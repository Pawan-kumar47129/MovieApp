import useMovieById from "../hooks/useMovieById";
import {useSelector} from "react-redux"
function VideoBackground({movieId}) {
  useMovieById(movieId);
  const trailerMovie=useSelector(store=>store.movie.trailerMovie);
  return (
    <>
    <div className="w-[vw] h-full overflow-hidden -ml-5 flex justify-center items-center mx-auto">
      <iframe
        className="w-screen  aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=S7s5BHuRZD29t7S0&autoplay=1&mute=1&loop=1`}
        allowFullScreen

      ></iframe>
    </div>
   
    </>
  );
}
export default VideoBackground;
