import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Home.scss"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container_home" >
        <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

      </div>
    </div>
  );
};

export default Home;