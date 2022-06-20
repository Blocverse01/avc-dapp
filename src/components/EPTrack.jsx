import { fetchFromUrl, selectCover } from "music-metadata-browser";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const getTrackImgSrc = (mediatag) => {
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
        {mediaTag?.title ? (
          <img
            className="Media-tag-img"
            src={getTrackImgSrc(mediaTag)}
            alt="track-img"
          />
        ) : (
          <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
            <Skeleton height={50} width={50} />
          </SkeletonTheme>
        )}
        <div>
          {mediaTag?.artist ? (
            <div>
              <h3>{mediaTag?.title}</h3>
              <span>{mediaTag?.artist}</span> - <span>{mediaTag?.album}</span>
            </div>
          ) : (
            <div className="w-full ml-5">
              <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
                <Skeleton count={2} width={170} />
              </SkeletonTheme>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
