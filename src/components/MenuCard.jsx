import { useState } from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="flex justify-between py-6 border-b border-[#f1f1f6] last:border-b-0">
      {/* Left Side Content */}
      <div className="flex-1 pr-4 max-w-[calc(100%-120px)]">
        {/* Item Name */}
        <h3 className="text-[17px] leading-5 font-medium text-[#3e4152] mb-1 ml-2">
          {item.name}
        </h3>

        {/* Price */}
        <p className="text-[14px] font-normal text-[#3e4152] mb-1 ml-2">
          ₹{item.price / 100 || item.defaultPrice / 100}
        </p>

        <div className="text-[13px] text-[#7e808c] leading-[1.3] ml-2">
          <span>{item.description}</span>
        </div>
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
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
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
