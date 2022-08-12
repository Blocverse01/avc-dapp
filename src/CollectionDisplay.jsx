import { collections } from "./data/collections";
import { useParams } from "react-router-dom";
import CollectionGroupCard from "./components/CollectionGroupCard";
import TokenGatedMusicPlayer from "./components/TokenGatedMusicPlayer";
import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function CollectionDisplay() {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [collection, setCollection] = useState(null);
  useEffect(() => {
    setHasLoaded(true);
    setCollection(collections.find((item) => item.id === id));
  }, []);
  const isLeriq = collection?.id === "leriq";
  return (
    <section className="px-6 Collection-display">
      {collection ? (
        <div>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h3 className="Collection-name">{collection.title}</h3>
          </AnimationOnScroll>
          <div className="Collection-list">
            {collection.group.map((group, index) => (
              <CollectionGroupCard hasLoaded={hasLoaded} key={index} group={group} />
            ))}
            {isLeriq && <TokenGatedMusicPlayer />}
          </div>
          <div className="Collection-description">
            <h3 className="Collection-name">About Collection</h3>
            <p>{collection.description1}</p>
            <p>{collection.description2}</p>
            <p>{collection.description3}</p>
            <p>{collection.description4}</p>
            <p>{collection.description5}</p>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="w-full text-center Collection-name">Loading...</h3>
        </div>
      )}
    </section>
  );
}
export default CollectionDisplay;
