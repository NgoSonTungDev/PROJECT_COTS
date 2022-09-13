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
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    console.log("window.pageYOffset: ", window.pageYOffset);
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
                <span>maflineclothing@gamil.com</span>
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
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">sale</a>
              </li>
              <li>
                <a href="#">Size check</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li onClick={movelogin}>
                <a href="#">sign in</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
