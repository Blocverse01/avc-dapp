import CollectionItemCard from "./CollectionItemCard";

function CollectionGroupCard({ group }) {
  return (
    <section className="Collection-group">
      <h2 className="Collection-group-name">{group.name}</h2>
      <div className="Collection-group-row">
        {group.items.map((item, index) => (
          <CollectionItemCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default CollectionGroupCard;
