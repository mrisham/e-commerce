import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
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
          Shop {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("woman");
          }}
        >
          Woman {menu === "woman" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>login</button>
        <img src={cart} alt="cart" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
