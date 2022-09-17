import React, { useState , useEffect} from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  const [offset, setOffset] = useState(0);
  const username = localStorage.getItem("username");
  const admin = localStorage.getItem("admin");

  const movelogin = () => {
    navigation("/login");
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])
  

  return (
    <div>
      <div className="container_narbar">
        <div className={`container_narbar_intro ${offset > 200 && 'hide'}`}>
          <div className="container_narbar_intro_1">
            <div className="container_narbar_intro_1_contact">
              <span>
                <i class="bx bx-envelope"></i>
                <span>maflineclothing@gmail.com</span>
              </span>
              <span>
                <i class="bx bx-phone"></i>
                <span>0386762927</span>
              </span>
            </div>
            <div className="container_narbar_intro_1_contact">
              <span>
                <i class="bx bxl-github"></i>
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
              <li onClick={()=>{navigation("/home")}}>
                <p>Home</p>
              </li>
              <li onClick={()=>{navigation("/sale")}}>
                <p >sale</p>
              </li>
              <li>
                <p>Size check</p>
              </li>
              <li>
                <p onClick={()=>{navigation("/about")}}>About</p>
              </li>
              <li onClick={movelogin}>
                <p>sign in</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
