function CollectionItemCard({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.title || "image_"} />
      {item.title ? (
        <h3 className="Collection-card-title">{item.title}</h3>
      ) : null}
    </div>
  );
}

export default CollectionItemCard;
