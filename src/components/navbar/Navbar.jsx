import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            {" "}
            Men {menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("woman");
          }}
        >
          <Link to="/women" style={{ textDecoration: "none" }}>
            Woman {menu === "woman" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
