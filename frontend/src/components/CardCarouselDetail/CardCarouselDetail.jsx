import React from "react";
import "./CardCarouselDetail.scss"

const CardCarouselDetail = () => {
  return (
    <div>
      <div className="container_CardCarouselDetail">
        <div className="container_CardCarouselDetail_img">
          <img
            src="https://product.hstatic.net/200000260587/product/6d4dde0b2e6cdb32827d_870d1239d5b845938ed732170e02851f_master.jpg"
            alt=""
          />
        </div>
        <div className="container_CardCarouselDetail_name">
            <p>HARD MODE BASIC TEE / BLACK</p>
            <i>180.000₫ </i> <span>59.000₫</span>
        </div>
      </div>
    </div>
  );
};

export default CardCarouselDetail;
