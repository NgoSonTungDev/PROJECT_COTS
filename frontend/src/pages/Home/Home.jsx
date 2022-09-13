import React from "react";
import Icon from "../../components/Icon/Icon";
import Navbar from "../../components/Navbar/Navbar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import DataImage from "./image";
import "./Home.scss";
import CardHome from "../../components/CardHome/CardHome";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container_home">
        <div className="container_home_top">
          <div className="container_home_top_content">
            <p>
              Welcome to <span>MAFLINE</span>
            </p>
            <h2>
              We are a team of talented designers who create the best clothing
              products in Vietnam
            </h2>
            <button>GET STARTED</button>
          </div>
        </div>
        <div className="container_home_product">
          <h1>NEW ARRIVAL</h1>
          <div className="container_home_product_card">
            <CardHome/>
          </div>
          <h1>BEST SELLER </h1>
          <div className="container_home_product_card"></div>
          <h1>INSTAGRAM : MAFLINE </h1>
          <div className="container_home_product_card_image">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {DataImage.map((item) => (
                  <img src={item} alt="" />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <Icon />
     <Footer></Footer>
    </div>
  );
};

export default Home;
