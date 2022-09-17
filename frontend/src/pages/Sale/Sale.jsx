import React from "react";
import "./Sale.scss";
import Navbar from "../../components/Navbar/Navbar";
import CardHome from "../../components/CardHome/CardHome";
import Footer from "../../components/Footer/Footer";

const Sale = () => {
  const onPress_ENTER = (event) => {
    var keyPressed = event.keyCode || event.which;
    if (keyPressed === 13) {
      alert("akjshdakjh");
      keyPressed = null;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container_sale">
        <div className="container_sale_top">
          <div className="container_sale_top_search">
            <div className="container_sale_top_search_1">
              <i class="bx bx-search-alt-2"></i>
              <input
                type="text"
                placeholder="Search . . ."
                onKeyDown={(e) => onPress_ENTER(e)}
              />
            </div>
            <div className="container_sale_top_search_2">
              <select name="" id="">
                <option value="">All</option>
                <option value="">New</option>
                <option value="">Sale</option>
                <option value="">Giá Tăng dần</option>
                <option value="">Giá giảm dần</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container_sale_product_card">
          <CardHome />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Sale;
