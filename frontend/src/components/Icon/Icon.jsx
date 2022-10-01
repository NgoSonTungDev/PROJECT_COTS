import React from "react";
import "./Icon.scss";
import { useNavigate } from "react-router-dom";

const Icon = () => {
  const navigation = useNavigate();

  return (
    <div>
      <div className="container_icon">

        <div className="container_icon_cart"
          onClick={() => {
            navigation("/history");
          }}>
          <i class="bx bx-history"></i>
          <span>0</span>
        </div>
        <div className="container_icon_cart" onClick={() => {
          navigation("/cart");
        }}>
          <i

            class="bx bx-cart-alt"
          ></i>
          <span style={{ transform: "translateY(70px)" }}>0</span>
        </div>

      </div>
    </div>
  );
};

export default Icon;
