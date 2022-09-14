import React, { useEffect } from "react";
import "./Footer.scss";
const Footer = () => {

  return (
    <div>
      <div className="container_footer">
        <div className="footer_Top">
          <h2>MAFLINE</h2>
          <p> THIẾT KẾ VÀ THỜI TRANG </p>
        </div>
        <div className="footer_Main">
          <div className="footer_Main_left">
            <span>Contact</span>
            <ul>
              <li>Address : <a href="">137 Nguyễn Chí Thanh TP ĐN</a></li>
              <li>Email : <a href="">maflineclothing@gmail.com</a> </li>
              <li>Phone : <a href="">0386762927</a> </li>
            </ul>
          </div>
          <div className="footer_Main_container">
            <span>Useful Links</span>
            <ul>
              <li>
                <i class="fa-solid fa-reply"></i>
                <a href="">Home</a>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <a href="">About</a>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <a href="">Services</a>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <a href="">Team</a>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_Main_right">
            <div className="icon1">
              <span>Our Social NetWorks</span>
              <ul>
                <li>
                  <a href="">MAFLINE tự hào là local đầu tiên đưa sản
                    phẩm về mức giá <br /> #SALE 99k</a>
                </li>
              </ul>

            </div>
            <div className="icon">
              <span>
                <i class="bx bxl-twitter"></i>
              </span>
              <span>
                <i class="bx bxl-facebook"></i>
              </span>
              <span>
                <i class="bx bxl-instagram"></i>
              </span>
              <span>
                <i class="bx bxl-skype"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="deSign">
          <p>Copyright © 2022 MAFLINE</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
