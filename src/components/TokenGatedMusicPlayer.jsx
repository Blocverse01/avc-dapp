import EPTrackList from "./EPTrackList";
import track1 from "../data/EP-music/Hip-Horray.mp3";
import track2 from "../data/EP-music/synonymous.mp3";
import track3 from "../data/EP-music/U.mp3";
import PlayerControlsCard from "./PlayerControlsCard";
import useAudioPlayer from "../hooks/useAudioPlayer";
import CurrentMusicCard from "./CurrentMusicCard";
import { useState } from "react";
import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function MusicPlayer() {
  const { curTime, duration, setClickedTime, playing, setPlaying } =
    useAudioPlayer();
  const tracks = [track1, track2, track3];
  const [curStream, setCurrentStream] = useState(0);
  const chooseNextTrack = () => {
    setPlaying(false);
    setCurrentStream((curStream + 1) % tracks.length);
    setPlaying(true);
  };
  const choosePrevTrack = () => {
    setPlaying(false);
    setCurrentStream((curStream - 1 + tracks.length) % tracks.length);
    setPlaying(true);
  };
  return (
    <section className="EP-music-player">
      <section className="EP-music-player-content">
        <div>
          <CurrentMusicCard music={tracks[curStream]} />
          <audio key={`player_${curStream}`} className="hidden" id="audio">
            <source src={tracks[curStream]} />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
        <PlayerControlsCard
          curTime={curTime}
          duration={duration}
          setClickedTime={setClickedTime}
          playing={playing}
          setPlaying={setPlaying}
          chooseNextTrack={chooseNextTrack}
          choosePrevTrack={choosePrevTrack}
        />
      </section>
      <EPTrackList
        curStream={curStream}
        setCurrentStream={setCurrentStream}
        setPlaying={setPlaying}
        trackList={tracks}
      />
    </section>
  );
}
