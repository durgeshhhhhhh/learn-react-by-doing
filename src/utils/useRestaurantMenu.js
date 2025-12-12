import { useEffect, useState } from "react";
import { Menu_Api_URL } from "../utils/constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuCategory, setMenuCategory] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(Menu_Api_URL + resId);
      // console.log("Menu Data: ", response);

      let info = response?.data?.data?.cards[2]?.card?.card.info;

      setResInfo(info || []);

      let menuCategory = null;

      const regularCards =
        response?.data?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards;

      const categories = regularCards.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      menuCategory = categories;

      setMenuCategory(menuCategory || []);
    } catch (error) {
      console.log("Error fetching menu data:", error);
    }
  };

  return [resInfo, menuCategory];
};

export default useRestaurantMenu;
