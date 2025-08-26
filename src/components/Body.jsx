import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9781542&lng=72.4933552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = response.data;

      setListOfRestaurants(
        json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
