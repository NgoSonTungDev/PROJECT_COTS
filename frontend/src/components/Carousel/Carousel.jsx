import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./Carousel.scss";

const CarouselSuppage = () => {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",

    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",

    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",

    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    
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
