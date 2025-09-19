import { useEffect, useState } from "react";
import { Menu_Api_URL } from "../utils/constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  // Update your fetchMenu function with this more robust implementation
  const fetchMenu = async () => {
    try {
      const response = await axios.get(Menu_Api_URL + resId);
      console.log("Menu Data: ", response);

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
      let menuItems = null;

      // First look for groupedCard structure which typically contains menu sections
      const groupedCardIndex = cards.findIndex(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );

      if (groupedCardIndex !== -1) {
        const regularCards =
          cards[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          [];

        // First try to find a Recommended section
        const recommendedCard = regularCards.find(
          (card) =>
            card?.card?.card?.title === "Recommended" ||
            card?.card?.card?.title?.includes("Recommended")
        );

        if (recommendedCard?.card?.card?.itemCards) {
          menuItems = recommendedCard.card.card;
        } else {
          // If no Recommended section, look for any card with itemCards
          for (const card of regularCards) {
            if (card?.card?.card?.itemCards?.length > 0) {
              menuItems = card.card.card;
              break;
            }
          }
        }
      }

      // If still no menu items, try one more approach - sometimes they're in a different structure
      if (!menuItems) {
        for (const card of cards) {
          if (card?.card?.card?.itemCards?.length > 0) {
            menuItems = card.card.card;
            break;
          }
        }
      }

      if (menuItems) {
        setMenuItems(menuItems);
      } else {
        console.log("Could not find menu items in the response");
      }
    } catch (error) {
      console.log("Error fetching menu data:", error);
    }
  };

  return [resInfo, menuItems];
};

export default useRestaurantMenu;
