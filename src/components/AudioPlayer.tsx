import AudioMP3 from "../assets/audio.mp3";
import AudioOGG from "../assets/audio.ogg";

const AudioPlayer = () => {
    return (
        <audio controls>
            <source src={AudioMP3} type="audio/mpeg" />
            <source src={AudioOGG} type="audio/ogg" />
            Tu navegador no soporta el elemento de audio.
        </audio>
    )
}

export default AudioPlayer;