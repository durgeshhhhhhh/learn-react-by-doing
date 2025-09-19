import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("sign in");

  useEffect(() => {}, [signInBtn]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>

          <li>
            <Link to="/about"> About Us</Link>{" "}
          </li>

          <li>
            <Link to="/contact">Contact US </Link>{" "}
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>{" "}
          </li>

          <button
            className="login-btn"
            onClick={() => {
              signInBtn === "sign out"
                ? setsignInBtn("Sign In")
                : setsignInBtn("sign out");
            }}
          >
            {signInBtn}
          </button>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
