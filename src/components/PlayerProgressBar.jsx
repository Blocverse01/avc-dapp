import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);
export default function PlayerProgressBar(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".Music-player__bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="Music-player__bar">
      <div className="Music-player__bar__progress__wrapper">
        <div
          className="Music-player__bar__progress"
          style={{
            background: `linear-gradient(to right, #5D24D6 ${curPercentage}%, #DEDDE3 0)`,
          }}
          onMouseDown={(e) => handleTimeDrag(e)}
        >
          <span
            className="Music-player__bar__progress__knob"
            style={{ left: `${curPercentage - 1.4}%` }}
          />
        </div>
      </div>
      <div className="Music-player__bar__time__cont">
        <span className="Music-player__bar__time">
          {formatDuration(curTime)}
        </span>
        <span className="Music-player__bar__time">
          {formatDuration(duration)}
        </span>
      </div>
    </div>
  );
}
