import React from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container_cart_user">
        <div className="container_cart_user_card">
          <div className="container_cart_user_card_text">
            <h6>Thông tin khách hàng</h6>
          </div>
          <div className="container_card">
            <div className="container_cart_user_card_img">
              <img
                src="https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg"
                alt=""
              />
            </div>
            <div className="container_cart_user_card_img_text">
              <div className="container_cart_user_card_img_text_name">
                <p>NgoSonTung</p>
                <p>user</p>
              </div>
              <div className="container_cart_user_card_information">
                <div className="container_cart_user_card_information_text">
                  <b>Email:</b>
                  <i>ngosontung0309@gmail.com</i>
                </div>
                <div className="container_cart_user_card_information_text">
                  <b>số điện thoại:</b>
                  <i>012345678</i>
                </div>
                <div className="container_cart_user_card_information_text">
                  <b>Địa chỉ:</b>
                  <i>225/10 Nguyễn phước nguyên</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_cart_user_right">
          <div className="container_cart_text">
            <h4>Giỏ Hàng của bạn</h4>
          </div>
          <div className="container_cart_user_right_table">
          <table>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>các Size</th>
              <th>các Màu</th>
              <th>Giá bán</th>
              <th>Chức năng</th>
            </tr>
            <tr>
              <td className="cart_product">
                <img
                  src="https://product.hstatic.net/200000260587/product/b6cab97b491cbc42e50d_6d85a7f0498b4442832b5c0e3789bec0_grande.jpg"
                  alt=""
                />
              </td>
              <td> HARD MODE BASIC TEE / BEIGE</td>
              <td>S,M,X,XXL</td>
              <td>Đỏ,trắng,đen,nau</td>
              <td style={{ color: "#d63031", fontWeight: "600" }}>
                      69000₫</td>
              <td className="cart_btn">
                <button>Xem chi tiết</button>
                <button>Xóa</button>
              </td>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
