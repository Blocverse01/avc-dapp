import CollectionItemCard from "./CollectionItemCard";
import MintingModal from "./MintingModal";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function CollectionGroupCard({ group, hasLoaded }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <section className="Collection-group">
        <h2 className="Collection-group-name">{group.name}</h2>
        <div className="Collection-group-row">
          {group.items.map((item, index) => (
            <AnimationOnScroll key={index} animateIn="animate__fadeIn">
              <CollectionItemCard hasLoaded={hasLoaded} item={item} />
            </AnimationOnScroll>
          ))}
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="Collection-group__mint-btn"
          >
            Mint
          </button>
        </div>
        <MintingModal open={open} setOpen={setOpen} />
      </section>
    </AnimationOnScroll>
  );
}

export default CollectionGroupCard;
