import { useState } from "react";

const MenuCard = ({ item }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex justify-between py-6 border-b border-[#f1f1f6] last:border-b-0">
      {/* Left Side Content */}
      <div className="flex-1 pr-4 max-w-[calc(100%-120px)]">
        {/* Veg/Non-veg Indicator */}
        <div className="mb-1">
          {item?.itemAttribute?.vegClassifier === "VEG" ? (
            <div className="w-4 h-4 border border-[#0f8a65] flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-[#0f8a65] rounded-full"></div>
            </div>
          ) : (
            <div className="w-4 h-4 border border-[#e43b4f] flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-[#e43b4f] rounded-full"></div>
            </div>
          )}
        </div>

        {/* Bestseller Tag */}
        {item?.ribbon?.text && (
          <div className="text-[#ee9c00] text-[10px] font-medium mb-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-3 h-3 mr-1 fill-current"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.545 1.67l1.286 3.953c.3.921-.755 1.688-1.54 1.118l-3.38-2.458a1.5 1.5 0 00-1.763 0l-3.38 2.458c-.786.57-1.838-.197-1.539-1.118l1.286-3.953a1.5 1.5 0 00-.546-1.67L1.544 9.628c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.422-1.033L9 2.927z"></path>
            </svg>
            {item.ribbon.text}
          </div>
        )}

        {/* Item Name */}
        <h3 className="text-[17px] leading-5 font-medium text-[#3e4152] mb-1">
          {item.name}
        </h3>

        {/* Price */}
        <p className="text-[14px] font-normal text-[#3e4152] mb-1">
          ₹{item.price / 100 || item.defaultPrice / 100}
        </p>

        {/* Rating */}
        {item.ratings?.aggregatedRating?.rating && (
          <div className="flex items-center mb-2">
            <span className="text-[#3d9b6d] flex items-center text-[12px] font-medium">
              <svg
                viewBox="0 0 20 20"
                className="w-3 h-3 mr-[1px] fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {item.ratings.aggregatedRating.rating}
            </span>
            <span className="text-[#7e808c] text-[12px] ml-[2px]">
              (
              {item.ratings.aggregatedRating.ratingCountV2 ||
                item.ratings.aggregatedRating.ratingCount
                  ?.toString()
                  .split(" ")[0]}
              )
            </span>
          </div>
        )}

        {/* Description with More Link */}
        {item.description && (
          <div className="text-[13px] text-[#7e808c] leading-[1.3]">
            {showFullDescription ? (
              <>
                <span>{item.description}</span>
                <button
                  className="text-[#5d8ed5] font-medium ml-1"
                  onClick={() => setShowFullDescription(false)}
                >
                  less
                </button>
              </>
            ) : (
              <>
                <span>
                  {item.description.length > 80
                    ? `${item.description.substring(0, 80)}...`
                    : item.description}
                </span>
                {item.description.length > 80 && (
                  <button
                    className="text-[#5d8ed5] font-medium ml-1"
                    onClick={() => setShowFullDescription(true)}
                  >
                    more
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Right Side - Image and Add Button */}
      <div className="w-[118px] flex flex-col relative">
        {item.imageId && (
          <div className="relative w-full h-[96px] rounded-[4px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
              alt={item.name}
            />
          </div>
        )}

        {/* ADD Button */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button className="bg-white text-[#60b246] border border-[#d4d5d9] px-[18px] py-[6px] text-[12px] font-bold rounded-[4px] shadow-md hover:shadow-lg transition-shadow uppercase tracking-[0.4px]">
            ADD
          </button>
        </div>

        {/* Customisable Text */}
        {item.isCustomizable && (
          <p className="text-[#7e808c] text-[10px] text-center mt-8">
            Customisable
          </p>
        )}
      </div>
    </div>
  );
};


export default MenuCard;
