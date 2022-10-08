import React, {useEffect,useState} from "react";
import "./Icon.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Icon = () => {
  const [cart, setCart] = useState([])
  const [history, setHistory] = useState([])
  const navigation = useNavigate();
  const user = JSON.parse(localStorage.getItem("dataUser"));

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${user._id}`)
      .then(function (response) {
        setHistory(response.data.history);
        setCart(response.data.cart);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {user != null && (
        <div className="container_icon">
          <div
            className="container_icon_cart"
            onClick={() => {
              navigation("/history");
            }}
          >
            <i class="bx bx-history"></i>
            <span>{history.length}</span>
          </div>

          <div
            className="container_icon_cart"
            onClick={() => {
              navigation("/cart");
            }}
          >
            <i class="bx bx-cart-alt"></i>
            <span style={{ transform: "translateY(70px)" }}>{cart.length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icon;
