import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./Carousel.scss";

const CarouselSuppage = ({ dataImage }) => {

  const data = [
    {
      image:
        "//product.hstatic.net/200000260587/product/zve03228_4aa827cfe25c4633bb58bb4c061f9e95_master.png",
    },
    {
      image:
        "//product.hstatic.net/200000260587/product/zve03230_3233ff487e9543c288978f51190f4a64_compact.png",
    },
    {
      image:
        "//product.hstatic.net/200000260587/product/zve03232_ce37f0d97b5f4b7d9f7f804d21111b65_compact.png",
    },
    {
      image:
        "//product.hstatic.net/200000260587/product/zve03233_ff32793a78e141528320965bfa0b4ab5_compact.png",
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <Carousel
        data={data}
        time={1000}
        width="400px"
        height="500px"
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        automatic={true}
        // dots={false}
        // pauseIconColor="white"
        // pauseIconSize="40px"
        // slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          marginLeft: "70px",
          transform: "translateY(140px)",
        }}
      />
    </div>
  );
};

export default CarouselSuppage;
