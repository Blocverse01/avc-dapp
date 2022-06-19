import EPTrack from "./EPTrack";

export default function EPTrackList({
  trackList,
  setCurrentStream,
  setPlaying,
}) {
  const playMe = (index) => {
    setCurrentStream(index);
    setPlaying(true);
  };
  return (
    <section className="EP-track-list">
      {trackList.map((track, index) => (
        <div
          key={`track_${index}`}
          className="cursor-pointer"
          onClick={() => playMe(index)}
        >
          <EPTrack trackPath={track} />
        </div>
      ))}
    </section>
  );
}
