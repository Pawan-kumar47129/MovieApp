function VideoTitle({title,overview}){
 return(
    <div className="absolute top-[10%] sm:top-[20%] pl-4">
        <h1 className="text-3xl text-white font-bold mb-4">{title}</h1>
        <p className="text-xl text-white sm:max-w-[45vw]">{overview.substring(0,100)}</p>

        <div className="flex gap-x-3">
            <button className="bg-blue-400 text-white text-xl px-2 rounded-lg">play</button>
            <button className="bg-blue-400 text-white text-xl px-2 rounded-lg">watch more</button>
        </div>
    </div>
 )
}
export default VideoTitle;