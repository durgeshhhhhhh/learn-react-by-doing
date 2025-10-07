import MenuCard from "./MenuCard";

const RestaurantCategory = ({ data }) => {
  // console.log("itemCards : ", data?.itemCards[0]?.card?.info);
  return (
    <div className="my-4 bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <h3 className="text-lg font-medium text-gray-800">
          {data?.title}
          <span className="text-lg font-medium text-gray-800 ml-1">
            ({data?.itemCards?.length || 0})
          </span>
        </h3>
        <span className="text-xl text-gray-500"> ▼ </span>
      </div>
      <div>
        {data?.itemCards.map((card) => (
          <MenuCard key={card?.card?.info?.id} items={card?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
