import React from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardCart from "../../components/CardCart/CardCart";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="cart-left"></div>
        <div className="cart-content">
          <div className="cart-title">
            <h2>Giỏ hàng</h2>
          </div>
          <div className="cart-card">
          <CardCart />
          <CardCart />


          </div>
        </div>
        <div className="cart-right">
          <div className="cart-total">
            <div className="cart-total-title">
              <p>Tổng tiền: </p>
              <p>100.000 VNĐ</p>
            </div>
            <div className="cart-total-btn">
              <button>Thanh Toán</button>
            </div>

            <div className="cart-total-note">
              <input type="text" placeholder="Ghi chú"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
