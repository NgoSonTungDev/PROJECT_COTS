import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [check, setCheck] = useState(true);
  const username = localStorage.getItem("username");
  const admin = localStorage.getItem("admin");

  return (
    <div>
      <div className="container_narbar">
        <div className="container_narbar_intro">
          <div className="container_narbar_intro_1">
            <div className="container_narbar_intro_1_contact">
              <span>
                <i class="bx bx-envelope"></i>
                <span>mafline@gamil.com</span>
              </span>
              <span>
                <i class="bx bx-phone"></i>
                <span>0386762927</span>
              </span>
            </div>
            <div className="container_narbar_intro_1_contact">
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
        <div className="container_narbar_main">
          <nav>
            <label class="logo">MAFLINE</label>
            <ul>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
