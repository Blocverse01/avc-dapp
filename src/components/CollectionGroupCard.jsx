import CollectionItemCard from "./CollectionItemCard";
import MintingModal from "./MintingModal";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function CollectionGroupCard({ group, hasLoaded, refreshGatePass }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <MintingModal refreshGatePass={refreshGatePass} open={open} setOpen={setOpen} />
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
            <button onClick={() => setOpen(true)} className="Collection-group__mint-btn">
              Mint
            </button>
            <a href="https://leriq.cent.co/" className="Collection-group__mint-btn font-small text-base mt-3 lg:mt-3">
            Pay with debit/credit card
            </a>
          </div>
        </section>
      </AnimationOnScroll>
    </div>
  );
}

export default CollectionGroupCard;
