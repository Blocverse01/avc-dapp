import { fetchFromUrl } from "music-metadata-browser";
import { useEffect, useState } from "react";
import { getTrackImgSrc } from "./EPTrack";

export default function CurrentMusicCard({ music }) {
  const [mediaTag, setMediaTag] = useState({});
  useEffect(() => {
    async function loadTags() {
      const { common } = await fetchFromUrl(music);
      setMediaTag(common);
    }
    loadTags();
  }, [music]);
  return (
    <div className="Current-music-card">
      <img
        className="Current-music-card__image"
        src={getTrackImgSrc(mediaTag)}
        alt="track-img"
      />
      <div className="Current-music-card__details">
        <h3 className="Current-music-card__now-playing">Now Playing</h3>
        <h2 className="Current-music-card__title">{mediaTag?.title}</h2>
        <h5>{mediaTag?.artist}</h5>
        <h5>{mediaTag?.album}</h5>
      </div>
    </div>
  );
}
