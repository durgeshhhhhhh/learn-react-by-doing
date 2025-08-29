import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("sign in");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact US </li>
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
