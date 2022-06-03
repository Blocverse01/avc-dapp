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
      <div className="Collection-description">
      <h3 className="Collection-name">About Collection</h3>
      <p>
        {collection.description1}
      </p>
      <p>
        {collection.description2}
      </p>
      <p>
        {collection.description3}
      </p>
      <p>
        {collection.description4}
      </p>
      <p>
        {collection.description5}
      </p>
      {/* <p>
        {collection.description6}
      </p> */}
      </div>
    </section>
  );
}
export default CollectionDisplay;
