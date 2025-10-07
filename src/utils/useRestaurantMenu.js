import { useEffect, useState } from "react";
import { Menu_Api_URL } from "../utils/constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuCategory, setMenuCategory] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  // Update your fetchMenu function with this more robust implementation
  const fetchMenu = async () => {
    try {
      const response = await axios.get(Menu_Api_URL + resId);
      // console.log("Menu Data: ", response);

      // Find restaurant info
      let info = null;
      // Try common paths for restaurant info
      const cards = response?.data?.data?.cards || [];
      for (const card of cards) {
        if (card?.card?.card?.info && card?.card?.card?.info?.name) {
          info = card.card.card.info;
          break;
        }
      }

      if (info) {
        setResInfo(info);
      }

      // Find menu items using a flexible approach
      let menuCategory = null;

      // First look for groupedCard structure which typically contains menu sections
      const groupedCardIndex = cards.findIndex(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );

      if (groupedCardIndex !== -1) {
        const regularCards =
          cards[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          [];

        const categories = regularCards.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        menuCategory = categories;
      }

      if (menuCategory) {
        setMenuCategory(menuCategory);
      } else {
        console.log("Could not find menu category in the response");
      }
    } catch (error) {
      console.log("Error fetching menu data:", error);
    }
  };

  return [resInfo, menuCategory];
};

export default useRestaurantMenu;
