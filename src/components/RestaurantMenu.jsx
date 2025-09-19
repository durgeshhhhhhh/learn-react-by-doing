import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [activeTab, setActiveTab] = useState("Order Online");
  const [collapsedSections, setCollapsedSections] = useState({
    recommended: false, // Start with expanded section
  });
  const { resId } = useParams();

  const [resInfo, menuItems] = useRestaurantMenu(resId);

  // Toggle section collapse state
  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  if (!resInfo) return <Shimmer />;

  return (
    <div className="restaurant-menu-container">
      {/* Restaurant Name */}
      <div className="restaurant-title">
        <h1>{resInfo?.name || "Restaurant"}</h1>
      </div>

      {/* Tabs */}
      <div className="restaurant-tabs-container">
        <div className="restaurant-tabs">
          <button
            className={`tab-button ${
              activeTab === "Order Online" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Order Online")}
          >
            Order Online
          </button>
        </div>
      </div>

      {/* Restaurant Info Box */}
      <div className="restaurant-info-box">
        {/* Rating Section */}
        <div className="rating-section">
          <div className="rating-badge">★</div>
          <div className="rating-value">
            {resInfo?.avgRating || "4.4"}
            <span className="rating-count">
              ({resInfo?.totalRatingsString || "12K+ ratings"})
            </span>
          </div>
        </div>

        {/* Cost and Category */}
        <div className="cost-category">
          <span className="cost-value">
            {resInfo?.costForTwoMessage || "₹350 for two"}
          </span>
          <span className="divider-dot"></span>
          <span className="category">
            {resInfo?.cuisines?.join(", ") || ""}
          </span>
        </div>

        {/* Location Info */}
        <div className="outlet-info">
          <div className="outlet-location">
            <span className="outlet-dot"></span>
            <span className="outlet-label">Outlet</span>
            <span className="outlet-name">
              {resInfo?.areaName || "Prahlad Nagar"}
            </span>
          </div>
          <div className="delivery-time">
            {resInfo?.sla?.slaString || "25-30 MINS"}
          </div>
        </div>
      </div>

      {/* Menu sections with toggle functionality */}
      <div className="menu-section">
        <div
          className="menu-section-title"
          onClick={() => toggleSection("recommended")}
        >
          <h2>Recommended ({menuItems?.itemCards?.length || 0})</h2>
          <span
            className={`dropdown-icon ${
              collapsedSections["recommended"] ? "collapsed" : ""
            }`}
            aria-label={
              collapsedSections["recommended"]
                ? "Expand section"
                : "Collapse section"
            }
            role="button"
            tabIndex="0"
          >
            ▼
          </span>
        </div>

        {/* Menu items - conditionally rendered based on collapsed state */}
        {!collapsedSections["recommended"] && (
          <div className="menu-items-list">
            {menuItems?.itemCards?.map((card) => (
              <div key={card.card.info.id} className="menu-item-card">
                {/* Menu item content */}
                <div className="menu-item-details">
                  <div className="veg-indicator">
                    {card.card.info.itemAttribute.vegClassifier === "VEG" ? (
                      <div className="veg-badge"></div>
                    ) : (
                      <div className="non-veg-badge"></div>
                    )}
                  </div>

                  {card.card.info.ribbon?.text && (
                    <div className="bestseller-tag">
                      <span>★</span> {card.card.info.ribbon.text}
                    </div>
                  )}

                  <h3 className="menu-item-name">{card.card.info.name}</h3>
                  <p className="menu-item-price">
                    ₹
                    {card.card.info.price / 100 ||
                      card.card.info.defaultPrice / 100}
                  </p>

                  {card.card.info.ratings?.aggregatedRating?.rating && (
                    <div className="menu-item-rating">
                      <span>
                        ★ {card.card.info.ratings.aggregatedRating.rating}
                      </span>
                      <span className="rating-count">
                        ({card.card.info.ratings.aggregatedRating.ratingCount})
                      </span>
                    </div>
                  )}

                  <p className="menu-item-description">
                    {card.card.info.description}
                  </p>
                </div>

                <div className="menu-item-image-container">
                  {card.card.info.imageId && (
                    <img
                      className="menu-item-image"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${card.card.info.imageId}`}
                      alt={card.card.info.name}
                    />
                  )}
                  <button className="add-btn">ADD</button>
                  {card.card.info.isCustomizable && (
                    <p className="customizable-text">Customizable</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
