import React from "react";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your E-mail</h1>
      <p>Subscribe to our newsletter</p>
      <div>
        <input type="email" placeholder="email..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
