function VideoTitle({ title, overview }) {
  return (
    <div className="absolute top-[10%] sm:top-[10%] md:top-[40%] pl-4 hidden sm:block">
      <h1 className="text-3xl text-white font-bold mb-4">{title}</h1>
      <p className="text-xl text-white sm:max-w-[45vw]">
        {overview.substring(0, 100)}
      </p>
    </div>
  );
}
export default VideoTitle;
