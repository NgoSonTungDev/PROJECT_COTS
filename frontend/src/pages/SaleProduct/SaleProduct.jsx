import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import "./SaleProduct.scss";
import CardProduct from "../../components/CardProduct/CardProduct";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SaleProduct = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const onPress_ENTER = (e) => {
    var keyPressed = e.keyCode || e.which;
    if ((keyPressed = setSearch)) {
      setSearch(e.target.value);
      console.log(e.target.value);
      alert("thanh cong");
    } else {
      alert("that bai");
    }
  };

  // const onPress_ENTER = (e) => {
  //   var keyPressed = e.keyCode || e.which;
  //   if (keyPressed === 13) {
  //     alert("akjshdakjh");
  //     keyPressed = null;
  //   } else {
  //     return false;
  //   }
  // };

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/product?NameProduct=${search}`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    axios
      .get("http://localhost:8000/api/product/allproduct")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container_SaleProduct">
        <div className="container_SaleProduct_top">
          <div className="container_SaleProduct_top_search">
            <div className="container_SaleProduct_top_search_1">
              <i className="bx bx-search-alt-2"></i>
              <input
                type="text"
                placeholder="Search . . ."
                onKeyDown={(e) => onPress_ENTER(e)}
              />
            </div>
            <div className="container_SaleProduct_top_search_2">
              <select name="" id="">
                <option value="">All</option>
                <option value="">New</option>
                <option value="">Sale</option>
                <option value="">Giá Tăng dần</option>
                <option value="">Giá giảm dần</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container_SaleProduct_product_card">
          {data.map((item) => (
            <CardProduct dataProduct={item} />
          ))}
        </div>
        <div className="navigation_page">
          <Stack >
            <Pagination count={3} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SaleProduct;
