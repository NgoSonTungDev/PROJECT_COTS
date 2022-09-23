import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardHome.scss";

const CardHome = ({ datacard }) => {
  const navigation = useNavigate();

  return (
    <div>
      <div
        className="container_card"
        onClick={() => {
          console.log("jshdjakh", datacard.NameProduct);
          // navigation("/productDetail/16787368234fsd");
        }}
      >
        <div className="container_card_img">
          <img
            src="//product.hstatic.net/200000260587/product/6d4dde0b2e6cdb32827d_870d1239d5b845938ed732170e02851f_master.jpg"
            alt=""
          />
        </div>
        <div class="container_card_arrow-up">""</div>{" "}
        <div className="container_card_name">
          {/* <p>{datacard.price}</p> */}
          <i>180.000₫ </i> <span>59.000₫</span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
