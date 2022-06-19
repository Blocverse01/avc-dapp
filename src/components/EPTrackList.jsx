import EPTrack from "./EPTrack";

export default function EPTrackList({ trackList }) {
  return (
    <section className="EP-track-list">
      {trackList.map((track, index) => (
        <EPTrack key={index} trackPath={track} />
      ))}
    </section>
  );
}
