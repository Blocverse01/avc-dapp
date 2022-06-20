import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function CollectionItemCard({ item, hasLoaded }) {
  return (
    <div>
      {hasLoaded ? (
        <div>
          <img src={item.image} alt={item.title || "image_"} />
          {item.title ? (
            <h3 className="Collection-card-title">{item.title}</h3>
          ) : null}
        </div>
      ) : (
        <div className="h-[120px] md:h-[240px] lg:h-[394px] lg:w-[325.24px]">
          <SkeletonTheme baseColor="#05051a" highlightColor="#7F1C97">
            <Skeleton height={"100%"} width={"100%"} />
          </SkeletonTheme>
        </div>
      )}
    </div>
  );
}

export default CollectionItemCard;
