import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart.js";

import { routerLinks } from "../../routerConfig.js";

import EcomLogo from "../../assets/EcomLogo.png";
import SearchIcon from "./assets/searchicon.svg";
import ShoppingCartIcon from "./assets/shoppingcart.png";

import AddNewProductIcon from "./assets/addnewproduct.png";
import LoginIcon from "./assets/login.png";

import "./NavBar.css";

export const NavBar = () => {
  const [cart] = useCart();
  return (
    <nav className="nav">
      <Link to={routerLinks.HOME.path}>
        <img
          className="nav__logo"
          src={EcomLogo}
          alt="Ecommerce Logo"
          aria-label="Ecommerce Logo"
        />
      </Link>
      <div className="nav__search-bar">
        <img className="nav__search-icon" src={SearchIcon} alt="Search Icon" aria-hidden="true" />
        <input
          className="nav__search-input"
          type="text"
          name=""
          placeholder="Search for Products, Brands and More"
          aria-label="Search Bar"
        />
      </div>
      <div className="nav__login">
        <img className="nav__login-icon" src={LoginIcon} alt="Login Icon" aria-hidden="true" />
        <div className="nav__login-btn" role="button" tabIndex="0">
          Login
        </div>
      </div>
      <Link to={routerLinks.CART.path}>
        <div className="nav__cart">
          <div className="nav__cart-icon-wrapper">
            <img
              className="nav__cart-icon"
              src={ShoppingCartIcon}
              alt="Shopping Cart"
              aria-label="Shopping Cart"
            />
            <div className="nav__cart-count" aria-hidden="true">
              {cart.length}
            </div>
          </div>
          <span>Cart</span>
        </div>
      </Link>

      <Link to={routerLinks.ADD_PRODUCT.path}>
        <div className="nav__add-product">
          <img
            className="nav__add-product-icon"
            src={AddNewProductIcon}
            alt="Add new Product"
            aria-label="Become a Seller"
          />
          <span>Add New Product</span>
        </div>
      </Link>
    </nav>
  );
};
