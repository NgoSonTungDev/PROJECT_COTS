import React from "react";
import "./Icon.scss";
const Icon = () => {
  return (
    <div>
      <div className="container_icon">
        <div className="container_icon_cart">
          <i class="bx bx-history"></i>
          <span>0</span>
        </div>
        <div className="container_icon_cart">
          <i class="bx bx-cart-alt"></i>
          <span style={{transform:"translateY(70px)"}}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Icon;
