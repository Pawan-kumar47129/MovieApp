function VideoTitle(){
 return(
    <div className="absolute top-[50%] pl-4">
        <h1 className="text-3xl text-white font-bold mb-4">MB Movies</h1>
        <p className="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, velit! Velit quidem optio esse?</p>

        <div className="flex gap-x-3">
            <button className="bg-blue-400 text-white text-xl px-2 rounded-lg">play</button>
            <button className="bg-blue-400 text-white text-xl px-2 rounded-lg">watch more</button>
        </div>
    </div>
 )
}
export default VideoTitle;