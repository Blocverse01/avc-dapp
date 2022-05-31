import { collections } from "./data/collections";
import { useParams } from "react-router-dom";
import CollectionGroupCard from "./components/CollectionGroupCard";

function CollectionDisplay() {
  const { id } = useParams();
  const collection = collections.find((item) => item.id === id);
  return (
    <section className="px-6 Collection-display">
      <h3 className="Collection-name">{collection.title}</h3>
      <div className="Collection-list">
        {collection.group.map((group, index) => (
          <CollectionGroupCard key={index} group={group} />
        ))}
      </div>
    </section>
  );
}
export default CollectionDisplay;
