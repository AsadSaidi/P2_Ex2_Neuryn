import Video from "../assets/video.webm";

const VideoPlayer = () => {
    return (
        <video src={Video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30" />
    )
}

export default VideoPlayer;