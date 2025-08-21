import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredList = resList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          placeholder="Search for Restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
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
