import React from "react";
import Icon from "../../components/Icon/Icon";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
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
      </div>
      <Icon/>
    </div>
  );
};

export default Home;
