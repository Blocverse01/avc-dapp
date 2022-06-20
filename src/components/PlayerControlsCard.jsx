import {
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerProgressBar from "./PlayerProgressBar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
      {!duration ? (
        <div className="flex-1">
          <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
            <Skeleton height={"100%"} count={2} width={"100%"} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="flex-1">
          <div>
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
        </div>
      )}
    </section>
  );
}
