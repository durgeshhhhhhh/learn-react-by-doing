import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [signInBtn]);

  // Handle logo click with refresh functionality
  const handleLogoClick = (e) => {
    // If we're already on the homepage
    if (location.pathname === "/") {
      e.preventDefault(); // Prevent default Link behavior

      // Refresh the page (or use a more elegant approach)
      window.scrollTo(0, 0); // Scroll to top
      navigate(0); // This forces a refresh of the current page
    }
    // Else, let the Link component handle the navigation
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-sm bg-white sticky top-0 z-50">
      <div className="w-12">
        <Link to="/" onClick={handleLogoClick}>
          {/* Your SVG logo here */}
          <img src={LOGO_URL} alt="logo image" className="w-full" />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="flex items-center gap-6">
          <li className="text-sm">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact US
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Grocery
            </Link>
          </li>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors ml-2"
            onClick={() => {
              signInBtn === "sign out"
                ? setsignInBtn("Sign In")
                : setsignInBtn("sign out");
            }}
          >
            {signInBtn}
          </button>
          <li className="ml-4 font-medium">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
