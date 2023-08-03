import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="btn-login"
              onClick={() => {
                isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
              }}
            >
              {isLoggedIn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
