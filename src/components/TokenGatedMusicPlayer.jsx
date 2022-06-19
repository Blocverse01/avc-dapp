import EPTrackList from "./EPTrackList";
import track1 from "../data/EP-music/track1.mp3";
import track2 from "../data/EP-music/track2.mp3";
import track3 from "../data/EP-music/track3.mp3";
import track4 from "../data/EP-music/track4.mp3";
import track5 from "../data/EP-music/track5.mp3";
import track6 from "../data/EP-music/track6.mp3";

export default function MusicPlayer() {
  return (
    <section className="EP-music-player">
      <EPTrackList
        trackList={[track1, track2, track3, track4, track5, track6]}
      />
    </section>
  );
}
