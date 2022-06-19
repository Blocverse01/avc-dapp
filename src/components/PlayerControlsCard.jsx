import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerProgressBar from "./PlayerProgressBar";

export default function PlayerControlsCard({
  curTime,
  duration,
  setClickedTime,
  playing,
  setPlaying,
  chooseNextTrack,
  choosePrevTrack,
}) {
  return (
    <section className="Player-controls-card">
      <div className="flex-1">
        <PlayerProgressBar
          duration={duration}
          curTime={curTime}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
        <div className="Player-controls-card__button-wrapper">
          <button
            onClick={() => choosePrevTrack()}
            className="Player-controls-card__button next-prev"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={() => (playing ? setPlaying(false) : setPlaying(true))}
            className="Player-controls-card__button play"
          >
            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
          </button>
          <button
            onClick={() => chooseNextTrack()}
            className="Player-controls-card__button next-prev"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
