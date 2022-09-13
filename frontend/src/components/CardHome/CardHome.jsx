import React from "react";
import "./CardHome.scss";

const CardHome = () => {
  return (
    <div>
      <div className="container_card">
        <div className="container_card_img">
          <img
            src="//product.hstatic.net/200000260587/product/6d4dde0b2e6cdb32827d_870d1239d5b845938ed732170e02851f_master.jpg"
            alt=""
          />
        </div>
        <div class="container_card_arrow-up">
          <p>SALE</p>
        </div>{" "}
        <div className="container_card_name">
            <p>HARD MODE BASIC TEE / BEIGE</p>
            <i>180.000₫ </i> <span>59.000₫</span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
