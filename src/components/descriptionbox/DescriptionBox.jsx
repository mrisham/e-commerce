import React from "react";
import "./descriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quae
          blanditiis! Blanditiis cumque hic provident. Voluptatum hic voluptatem
          assumenda dignissimos beatae nihil incidunt soluta molestiae
          recusandae! Eligendi hic quasi doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          neque minima eum esse nemo, deserunt nihil quo harum numquam,
          consequatur obcaecati in. Non quisquam eveniet facere dignissimos,
          aliquid officia dolor.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
