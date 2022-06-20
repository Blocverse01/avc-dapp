import { getTrackImgSrc } from "./EPTrack";
import { Transition } from "react-transition-group";
const defaultStyles = {
  transition: `opacity 1000ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MusicImageCard({ mediaTag, isLoaded }) {
  return (
    <>
      <Transition in={isLoaded} timeout={1000}>
        {(state) =>
          isLoaded ? (
            <img
              className="Current-music-card__image"
              src={getTrackImgSrc(mediaTag)}
              styles={{
                ...defaultStyles,
                ...transitionStyles[state],
              }}
              alt="track-img"
            />
          ) : (
            <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
              <Skeleton height={128} width={128} />
            </SkeletonTheme>
          )
        }
      </Transition>
    </>
  );
}
