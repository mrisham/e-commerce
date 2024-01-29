import React from "react";
import "./relatedProducts.css";
import data_product from "../assets/data";
import Item from "../item/Item";
const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i) => (
          <Item
            id={item.id}
            key={i}
            image={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
