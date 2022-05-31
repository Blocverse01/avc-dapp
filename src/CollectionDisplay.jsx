import { collections } from "./data/collections";
import { useParams } from "react-router-dom";

function CollectionDisplay() {
  const { id } = useParams();
  const collection = collections.find((item) => item.id === id);
  return <div className="Collection-display"></div>;
}
export default CollectionDisplay;
