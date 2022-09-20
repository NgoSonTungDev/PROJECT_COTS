import React, { useRef, useState } from "react";
import "./Payment.scss";
import Navbar from "../../components/Navbar/Navbar";
import LoadingButton from "@mui/lab/LoadingButton";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const color = ["Đỏ", "Xanh", "Trắng"];
const size = ["S", "L", "XL"];

const Payment = () => {
  const [Amount, setAmount] = useState(1);
  const [Color, setColor] = useState("");
  const [Size, setSize] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [NumberPhone, setNumberPhone] = useState(0);
  const [Check, setCheck] = useState(false);
  const address = document.getElementById("address");
  const numberPhone = document.getElementById("numberPhone");
  const [buttonPayCheck, setButtonPayCheck] = useState("option_one");
  const refColor = useRef([]);
  const refSize = useRef([]);
  const navigation = useNavigate()

  var a = false,
    b = false,
    c = false;

    const movePaymentOrder = () =>{
      navigation("/productDetail/order/payment/1367563524")
    }

  const handleOnClickButtonGetInformation = () => {
    checkOption();
    if (a === true && b === true && c === true) {
      setCheck(true);
      document.getElementById("tablePayment").style.height = "570px";
      setTimeout(() => {
        setCheck(false);
      }, 1000);
    }
  };

  const checkOption = () => {
    if (Amount === "" || Size === "" || Color === "") {
      toast.error("Vui lòng chọn đầy đủ : (Màu) , (Kích Cở)", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      checkInput();
      a = true;
    }
  };

  const checkInput = () => {
    if (Address === "") {
      setErrorFor(address, "Address cannot be blank ");
    } else {
      setSuccessFor(address);
      b = true;
    }

    if (Address === "") {
      setErrorFor(numberPhone, "Number Phone cannot be blank ");
    } else {
      setSuccessFor(numberPhone);
      c = true;
    }
  };

  const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  };

  const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  };

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
                    <input
                      type="number"
                      min="1"
                      value={Amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
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
                          setColor(item);
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
                          setSize(item);
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
                  style={{ Width: "100%" }}
                  src="https://martina.vn/wp-content/uploads/2020/07/thiet-ke-ao-dong-phuc-02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container_payment_body">
          <div className="container_payment_body_input">
            <div className="container_payment_body_input_information">
              <form id="form" class="form">
                <div class="form-control">
                  <label for="username">Tên Khách Hàng</label>
                  <p>Ngo Son Tung</p>
                </div>
                <div class="form-control">
                  <label for="username">Email</label>
                  <p>Nguyenvana@gmail.com</p>
                </div>
                <div class="form-control">
                  <label for="username">Địa Chỉ</label>
                  <input
                    type="address"
                    placeholder="221 Hà Huy Tưởng"
                    id="address"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div class="form-control">
                  <label for="username">Số Điện Thoại</label>
                  <input
                    type="tel"
                    placeholder="0510123456"
                    id="numberPhone"
                    value={NumberPhone}
                    onChange={(e) => setNumberPhone(e.target.value)}
                  />
                  <i class="fas fa-check-circle"></i>
                  <i class="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
              </form>
              <LoadingButton
                className="buttonCheck"
                onClick={handleOnClickButtonGetInformation}
                loading={Check}
                variant="outlined"
              >
                Submit
              </LoadingButton>
            </div>
          </div>
          <div className="container_payment_body_order">
            <div className="container_payment_body_order_information">
              <div className="container_payment_body_order_information_text">
                <span>Đơn Hàng của bạn</span>
              </div>
              <div
                id="tablePayment"
                className="container_payment_body_order_information_table"
              >
                <table>
                  <tr>
                    <th>THÔNG TIN</th>
                    <th>CHI TIẾT</th>
                  </tr>
                  <tr>
                    <td>Tên Khách hàng</td>
                    <td>ngo son tung</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ</td>
                    <td>217 nguyễn phước nguyên</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>0522564268</td>
                  </tr>
                  <tr>
                    <td>Tên Sản phẩm</td>
                    <td>TAG ME TEE</td>
                  </tr>
                  <tr>
                    <td>Số lượng </td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>màu</td>
                    <td>Đen</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>XL</td>
                  </tr>
                  <tr>
                    <td>giá sản phẩm</td>
                    <td>3000 (VND)</td>
                  </tr>
                  <tr>
                    <td>Tiền vận chuyển</td>
                    <td>30.000 (VND)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "700" }}>Tổng Tiền thanh toán</td>
                    <td style={{ color: "#e84118", fontWeight: "bold" }}>
                      200.000 (VND)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "15px" }}>
                      <input
                        type="radio"
                        name="pay"
                        onClick={() => {
                          setButtonPayCheck("option_one");
                        }}
                        checked
                      />{" "}
                      Thanh toán khi nhận hàng
                    </td>
                    <td>
                      <input
                        type="radio"
                        name="pay"
                        accept=""
                        onClick={() => {
                          setButtonPayCheck("option_two");
                        }}
                      ></input>
                      Thanh toán qua ngân hàng
                    </td>
                  </tr>
                </table>
                <div className="container_payment_body_order_btn">
                  {buttonPayCheck === "option_one" ? (
                    <button>Đặt hàng</button>
                  ) : (
                    <button onClick={movePaymentOrder}>Thanh Toán</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
      <Footer />
    </div>
  );
};

export default Payment;
//500px
