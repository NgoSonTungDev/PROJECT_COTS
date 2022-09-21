import React from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="cart_container">
        <div className="cart_card">
          <div className="cart_card_text">
            <h6>Thông tin khách hàng</h6>
          </div>

          <div className="cart_card_logo">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
              alt=""
            />
            <h6>tiểu nhỏ</h6>
          </div>
          <div className="cart_card_information">
            <div className="cart_card_information_name">
              <p>Họ tên: Ngô Sơn Tùng</p>
            </div>
            <div className="cart_card_information_phone">
              <p>Số điện thoại: 0122344556</p>
            </div>
            <div className="cart_card_information_address">
              <p>Địa chỉ: Đà Nẵng</p>
            </div>
            <div className="cart_card_information_email">
              <p>Email: ngosontung@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="cart_right">
          <table>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Size</th>
              <th>Màu</th>
              <th>Tổng tiền</th>
              <th>Chức năng</th>
            </tr>
            <tr>
              <td>m01</td>
              <td className="cart_product">
                HARD MODE BASIC TEE / BEIGE
                <img
                  src="https://product.hstatic.net/200000260587/product/b6cab97b491cbc42e50d_6d85a7f0498b4442832b5c0e3789bec0_grande.jpg"
                  alt=""
                />
              </td>
              <td>5</td>
              <td>120</td>
              <td>L</td>
              <td>Đỏ</td>
              <td>600</td>
              <td className="cart_btn">
                <button>
                  Xem chi tiết
                </button>
                <button>
                  Xóa
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
