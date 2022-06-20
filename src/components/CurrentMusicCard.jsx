import { fetchFromUrl } from "music-metadata-browser";
import { useEffect, useState } from "react";
//import ImageTransition from "./ImageTransition";
import MusicImageCard from "./MusicImageCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CurrentMusicCard({ music }) {
  const [mediaTag, setMediaTag] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    async function loadTags() {
      const { common } = await fetchFromUrl(music);
      setMediaTag(common);
      setLoaded(true);
    }
    loadTags();
  }, [music]);
  return (
    <div className="Current-music-card">
      <MusicImageCard mediaTag={mediaTag} isLoaded={isLoaded} />
      {isLoaded ? (
        <div key={"music_details"} className="Current-music-card__details">
          <h3 className="Current-music-card__now-playing">Now Playing</h3>
          <h2 className="Current-music-card__title">{mediaTag?.title}</h2>
          <h5>{mediaTag?.artist}</h5>
          <h5>{mediaTag?.album}</h5>
        </div>
      ) : (
        <div className="self-center w-full">
          <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
            <Skeleton count={2} width={"100%"} />
          </SkeletonTheme>
        </div>
      )}
    </div>
  );
}
