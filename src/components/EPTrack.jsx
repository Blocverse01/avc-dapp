import { parseBlob, fetchFromUrl, selectCover } from "music-metadata-browser";
import { useEffect, useState } from "react";

const getTrackImgSrc = (mediatag) => {
  if (mediatag?.picture) {
    const cover = selectCover(mediatag.picture);
    return `data:${cover.format};base64,${cover.data.toString("base64")}`;
  }
  return "";
};

export default function EPTrack({ trackPath }) {
  const [mediaTag, setMediaTag] = useState({});
  useEffect(() => {
    async function loadTags() {
      const { common } = await fetchFromUrl(trackPath);
      setMediaTag(common);
    }
    loadTags();
  }, []);
  return (
    <section className="EP-track">
      <div className="Media-tag">
        <img
          className="Media-tag-img"
          src={getTrackImgSrc(mediaTag)}
          alt="track-img"
        />
        <div>
          <h3>{mediaTag?.title}</h3>
          <span>{mediaTag?.artist}</span> - <span>{mediaTag?.album}</span>
        </div>
      </div>
    </section>
  );
}
