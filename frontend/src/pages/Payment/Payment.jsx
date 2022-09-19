import React, { useRef } from "react";
import "./Payment.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const color = ["Đỏ", "Xanh", "Trắng"];
const size = ["S", "L", "XL"];

const Payment = () => {
  const refColor = useRef([]);
  const refSize = useRef([]);

  const handleCheckColor = (item, indexOption) => {
    refColor.current.forEach((e, index) => {
      if (index === indexOption) {
        refColor.current[index].classList.add("accept");
      } else {
        refColor.current[index].classList.remove("accept");
      }
    });
  };

  const handleCheckSize = (item, indexOption) => {
    refSize.current.forEach((e, index) => {
      if (index === indexOption) {
        refSize.current[index].classList.add("accept");
      } else {
        refSize.current[index].classList.remove("accept");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container_payment">
        <div className="container_payment_top">
          <div className="container_payment_top_content">
            <div className="container_payment_top_content_img">
              <img
                src="//product.hstatic.net/200000260587/product/6d4dde0b2e6cdb32827d_870d1239d5b845938ed732170e02851f_master.jpg"
                alt=""
              />
            </div>

            <div className="container_payment_top_content_option">
              <p>TAG ME TEE / WHITE COLOR</p>
              <hr />
              <table>
                <tr>
                  <td>Số lượng : </td>
                  <td>
                    <input type="number" min="1" />
                  </td>
                </tr>
                <tr>
                  <td>Màu : </td>
                  <td>
                    {color.map((item, index) => (
                      <span
                        ref={(e) => {
                          refColor.current[index] = e;
                        }}
                        key={index}
                        onClick={() => {
                          handleCheckColor(item, index);
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>Kích cở: </td>
                  <td>
                    {size.map((item, index) => (
                      <span
                        ref={(e) => {
                          refSize.current[index] = e;
                        }}
                        key={index}
                        onClick={() => {
                          handleCheckSize(item, index);
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </td>
                </tr>
              </table>
              <div className="container_payment_top_content_choose">
                <img
                style={{Width:"100%"}}
                  src="https://martina.vn/wp-content/uploads/2020/07/thiet-ke-ao-dong-phuc-02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
