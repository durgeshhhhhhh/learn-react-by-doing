import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );

            setListOfRestaurants(topRated);
            console.log("clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
