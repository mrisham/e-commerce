import React from "react";
import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import starDull_icon from "../assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={starDull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price-old">
          ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">
          ${product.new_price}
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quidem, veritatis, consequuntur iusto quaerat maxime voluptas placeat
          maiores praesentium laudantium repellendus iure, porro nihil
          voluptatibus quas! Distinctio nihil sunt eum!
        </div>
        <div className="productdisplay-right-size">
          <h1>Right size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
          </div>
          <div className="productdisplay-right-size">
            <div>M</div>
          </div>
          <div className="productdisplay-right-size">
            <div>L</div>
          </div>
          <div className="productdisplay-right-size">
            <div>XL</div>
          </div>
          <div className="productdisplay-right-size">
            <div>XXL</div>
          </div>
        </div>
        <button>add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, T-Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
