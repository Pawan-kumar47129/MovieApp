
function VideoBackground() {
  return (
    <>
    <div className="w-screen h-screen overflow-hidden -ml-5 flex justify-center items-center">
      <iframe
        className="w-[220%] h-[420%]"
        src="https://www.youtube.com/embed/LXb3EKWsInQ?si=S7s5BHuRZD29t7S0&autoplay=1&mute=1&loop=1"
        allowFullScreen 
        title="Embedded Content"
      ></iframe>
    </div>
   
    </>
  );
}
export default VideoBackground;
