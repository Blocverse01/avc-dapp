import CollectionItemCard from "./CollectionItemCard";
import MintingModal from "./MintingModal";
import { useState } from "react";

function CollectionGroupCard({ group }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="Collection-group">
      <h2 className="Collection-group-name">{group.name}</h2>
      <div className="Collection-group-row">
        {group.items.map((item, index) => (
          <CollectionItemCard key={index} item={item} />
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
  );
}

export default CollectionGroupCard;
