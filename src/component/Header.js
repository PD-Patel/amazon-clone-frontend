import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ user, basket }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      auth.onAuthStateChanged((authuser) => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      });
    }
  };
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header-search">
        <input type="text" className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-right">
        <Link className="link" to={!user && "login"}>
          <div onClick={handleAuth} className="header-option">
            <span className="header-option-l1">
              Hello, {user ? user.displayName : "Guest"}
            </span>
            <span className="header-option-l2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/order" className="link">
          <div className="header-option">
            <span className="header-option-l1">Returns</span>
            <span className="header-option-l2">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-l1">Try</span>
          <span className="header-option-l2">Prime</span>
        </div>
        <Link className="header-basket link" to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon className="basket-icon" />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
