import React, { useState, useEffect } from "react";
import "./History.scss";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const History = () => {
  const [data, setdData] = useState([]);
  const user = JSON.parse(localStorage.getItem("dataUser"));

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${user._id}`)
      .then(function (response) {
        setdData(response.data.history);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container_history_user">
        <div className="container_history_user_card">
          <div className="container_history_user_card_text">
            <h6>Thông tin khách hàng</h6>
          </div>
          <div className="container_card">
            <div className="container_history_user_card_img">
              <img
                src="https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg"
                alt=""
              />
            </div>
            <div className="container_history_user_card_img_text">
              <div className="container_history_user_card_img_text_name">
                <p>{user.username}</p>
                <p>{user.admin === false && <span>user</span>}</p>
              </div>
              <div className="container_history_user_card_information">
                <div className="container_history_user_card_information_text">
                  <b>Email:</b>
                  <i>{user.email
}</i>
                </div>
                <div className="container_history_user_card_information_text">
                  <b>số điện thoại:</b>
                  <i>{user.numberPhone}</i>
                </div>
                <div className="container_history_user_card_information_text">
                  <b>Địa chỉ:</b>
                  <i>{user.address}</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_history_user_right">
          <div className="container_history_text">
            <h4>Lịch Sử Mua Hàng</h4>
          </div>
          <div className="container_history_user_right_table">
            <table>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Size</th>
                <th>Màu</th>
                <th>Giá bán</th>
                <th>Tổng tiền</th>
                <th>Tình trạng</th>
                <th>Chức năng</th>
              </tr>

              {data.map((item) => (
                <tr>
                  <td>{item.codeOrders}</td>
                  <td>{item.NameProduct} </td>
                  <td>{item.Amount}</td>
                  <td>{item.Size}</td>
                  <td>{item.Color}</td>
                  <td>{item.price}</td>
                  <td>{item.Total}</td>
                  <td>
                    {item.Story === "Chờ xác nhận" && (
                      <span style={{ color: "#2ecc71" }}>{item.Story}</span>
                    )}
                    {item.Story === "Đã Thanh Toán" && (
                      <span style={{ color: "#3498db" }}>{item.Story}</span>
                    )}
                    {item.Story === "Giao Hàng Thành Công" && (
                      <span style={{ color: "#00b894" }}>{item.Story}</span>
                    )}
                  </td>
                  <td>
                    {item.Story === "Chờ xác nhận" && (
                      <button className="cancle">
                        <i class='bx bx-low-vision'></i> <span>Hủy đơn hàng</span>
                      </button>
                    )}
                    {item.Story === "Đã Thanh Toán" && (
                      <button className="CheckOrder">
                        <i class="bx bx-check"></i>{" "}
                        <span>Đã nhận được hàng</span>
                      </button>
                    )}
                    {item.Story === "Giao Hàng Thành Công" && (
                      <button className="DanhGia">
                        <i class="bx bx-star"></i>
                        <span>Đánh giá</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
