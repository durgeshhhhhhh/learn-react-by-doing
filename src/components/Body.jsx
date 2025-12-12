import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("List of Restaurants: ", listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://namastedev.com/api/v1/listRestaurants"
      );
      const json = response.data;
      console.log(response);

      setListOfRestaurants(
        json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50 min-h-screen px-3 md:px-6 py-6">
      {/* {console.log("page refreshed")} */}
      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={() => {
            // Search logic
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
              className="block transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {restaurant.info.veg == false ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center bg-white rounded-xl shadow-sm py-16">
            <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-20 h-20"
              >
                {/* Light gray circle background */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="#f3f4f6"
                  stroke="#d1d5db"
                  strokeWidth="2"
                />

                {/* Hashtag symbol */}
                <text
                  x="38"
                  y="55"
                  fontSize="28"
                  fontWeight="bold"
                  fill="#fc8019"
                >
                  #?
                </text>

                {/* Small magnifying glass */}
                <g
                  transform="translate(52, 45) scale(0.4) rotate(15)"
                  className="text-[#9ca3af]"
                >
                  <circle cx="20" cy="20" r="16" fill="none" strokeWidth="6" />
                  <line
                    x1="30"
                    y1="30"
                    x2="45"
                    y2="45"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3e4152]">
              No matching restaurants found
            </h3>
            <p className="text-sm text-[#7e808c] mt-2">
              Try a different keyword or reset filters.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              onClick={() => {
                setSearchText("");
                setFilteredRestaurants(listOfRestaurants);
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
