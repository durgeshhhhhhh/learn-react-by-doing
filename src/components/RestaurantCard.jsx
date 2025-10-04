import { CDN_URL } from "../utils/constants";

// RestaurantCard.jsx - Swiggy Style with Tailwind CSS
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm group transition-all duration-300">
      {/* Shadow overlay that appears on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity duration-300 z-0"></div>
      
      {/* Image with Offer Banner */}
      <div className="relative h-52 overflow-hidden">
        {/* Image zoom effect on hover */}
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Discount banner */}
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-2 px-3">
            <h3 className="text-white font-bold text-lg">
              {aggregatedDiscountInfoV3?.header || ""}
              {aggregatedDiscountInfoV3?.subHeader ? ` ${aggregatedDiscountInfoV3.subHeader}` : ""}
            </h3>
          </div>
        )}
      </div>
      
      {/* Restaurant Details */}
      <div className="p-3 relative z-10">
        {/* Restaurant Name with subtle animation */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-gray-900 transition-colors">
          {name}
        </h2>
        
        {/* Rating and Time */}
        <div className="flex items-center mt-1 mb-1">
          <div className="flex items-center">
            <div className="bg-green-600 text-white px-1 py-0 text-xs flex items-center justify-center rounded">
              <span className="mr-0.5">★</span>{avgRating}
            </div>
            <span className="mx-1 text-gray-500">•</span>
            <span className="text-gray-600 text-sm">{sla?.slaString || "30-35 mins"}</span>
          </div>
        </div>
        
        {/* Cuisines */}
        <p className="text-gray-500 text-sm line-clamp-1">{cuisines?.join(", ")}</p>
        
        {/* Location */}
        <p className="text-gray-500 text-sm">{areaName}</p>
      </div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-100 rounded-xl transition-colors duration-300"></div>
    </div>
  );
};

export default RestaurantCard;
