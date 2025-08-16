import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
  } = resData?.info || {};

  return (
    <div className="res-card">
      <div className="res-card__image-container">
        <img
          className="res-card__image"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant image"
        />

        {aggregatedDiscountInfoV3 && (
          <div className="res-card__promo">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>

      <div className="res-card__content">
        <h2 className="res-card__title">{name}</h2>
        <div className="res-card__rating-time">
          <span className="res-card__rating">{avgRating}</span>
          <span className="res-card__time">{sla?.slaString}</span>
        </div>
        <p className="res-card__cuisines">{cuisines?.join(", ")}</p>
        <p className="res-card__area">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
