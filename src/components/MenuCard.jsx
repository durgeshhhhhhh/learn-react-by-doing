const MenuCard = ({ item }) => {
  return (
    <div className="menu-item-card">
      <div className="menu-item-details">
        <div className="veg-indicator">
          {item.itemAttribute.vegClassifier === "VEG" ? (
            <div className="veg-badge"></div>
          ) : (
            <div className="non-veg-badge"></div>
          )}
        </div>

        {item.ribbon?.text && (
          <div className="bestseller-tag">
            <span>★</span> {item.ribbon.text}
          </div>
        )}

        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-price">
          ₹{item.price / 100 || item.defaultPrice / 100}
        </p>

        {item.ratings?.aggregatedRating?.rating && (
          <div className="menu-item-rating">
            <span>★ {item.ratings.aggregatedRating.rating}</span>
            <span className="rating-count">
              (
              {item.ratings.aggregatedRating.ratingCountV2 ||
                (item.ratings.aggregatedRating.ratingCount || "")
                  .toString()
                  .split(" ")[0]}
              )
            </span>
          </div>
        )}

        <p className="menu-item-description">{item.description}</p>
      </div>

      <div className="menu-item-image-container">
        {item.imageId && (
          <img
            className="menu-item-image"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
            alt={item.name}
          />
        )}
        <button className="add-btn">ADD</button>
        {item.isCustomizable && (
          <p className="customizable-text">Customizable</p>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
