import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, menuCategory] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // console.log("Category : ", menuCategory);

  if (!resInfo) return <Shimmer />;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white shadow-sm rounded-lg my-6">
      {/* Restaurant Title */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {resInfo?.name || "Restaurant"}
        </h1>
      </div>

      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <div className="pb-3 px-1 mr-8 font-medium text-orange-500 border-b-2 border-orange-500">
            Order Online
          </div>
        </div>
      </div>

      {/* Restaurant Info Box */}
      <div className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
        {/* Rating Section */}
        <div className="flex items-center mb-2">
          <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center text-white text-xs mr-2">
            ★
          </div>
          <div className="font-bold text-sm">
            {resInfo?.avgRating || "4.4"}
            <span className="text-gray-500 font-normal text-xs ml-1">
              ({resInfo?.avgRatingString || "12K+ ratings"})
            </span>
          </div>
        </div>

        {/* Cost and Category */}
        <div className="flex items-center mb-3">
          <span className="text-sm text-gray-700">
            {resInfo?.costForTwoMessage || "₹350 for two"}
          </span>
          <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
          <span className="text-sm text-red-400">
            {resInfo?.cuisines?.join(", ") || ""}
          </span>
        </div>

        {/* Location Info */}
        <div className="flex items-center relative">
          <div className="flex items-center bg-white z-10 pr-2">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            <span className="text-gray-500 text-sm mr-1">Outlet</span>
            <span className="text-blue-700 text-sm font-medium">
              {resInfo?.areaName || "Prahlad Nagar"}
            </span>
          </div>
          <div className="flex items-center bg-white z-10 pl-4">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            <span className="text-gray-500 text-sm">
              {resInfo?.sla?.slaString || "25-30 MINS"}
            </span>
          </div>
          <div className="absolute top-1/2 left-2 right-1/2 h-px bg-gray-200 -z-0"></div>
        </div>
      </div>

      <div className="space-y-6">
        {menuCategory.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
