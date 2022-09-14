import React from "react";
import "./Sizecheck.scss";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Sizecheck = () => {
  return (
    <div>
      <Navbar />
      <div className="sizecheck-container">
        <div className="sizecheck-left">
          <div className="sizecheck-title">
            <h2>Giới thiệu</h2>
          </div>
        </div>
        <div className="sizecheck-content"></div>
        <div className="sizecheck-right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Sizecheck;
