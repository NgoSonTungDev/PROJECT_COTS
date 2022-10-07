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
  const [pageNumber, setpageNumber] = useState(1);
  const [selectOption, setSelectOption] = useState("all");

<<<<<<< HEAD
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
=======

  const handleSearch = () => {
    {
      axios
        .get(`http://localhost:8000/api/product/allproduct?productName=${search}`)
        .then(function (response) {
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
>>>>>>> tanphu
  }

  const onPress_ENTER = (e) => {
    var keyPressed = e.keyCode || e.which;
<<<<<<< HEAD
    if ((keyPressed = setSearch)) {
      setSearch(e.target.value);
      console.log(e.target.value);
      alert("thanh cong");
=======
    if (keyPressed === 13) {
      handleSearch();
>>>>>>> tanphu
    } else {
      return false;
    }
  };

  const handleCheckSelect = () => {
    if (selectOption === "all") {
      setpageNumber(1);
      axios
        .get(`http://localhost:8000/api/product/allproduct?pageNumber=1`)
        .then(function (response) {
          setData(response.data.sort((a, b) => b.price - a.price)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (selectOption === "tang") {
      axios
        .get(`http://localhost:8000/api/product/allproduct`)
        .then(function (response) {
          setData(response.data.sort((a, b) => a.price - b.price)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (selectOption === "giam") {
      axios
        .get(`http://localhost:8000/api/product/allproduct`)
        .then(function (response) {
          setData(response.data.sort((a, b) => b.price - a.price)
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (selectOption === "new") {
      axios
        .get(`http://localhost:8000/api/product/allproduct`)
        .then(function (response) {
          setData(response.data.filter((e) => e.story === "NEW")
          )
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (selectOption === "sale") {
      axios
        .get(`http://localhost:8000/api/product/allproduct`)
        .then(function (response) {
          setData(response.data.filter((e) => e.story === "SALE")
          )

        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }

  const handleChangePageNumer = (event, value) => {
    setpageNumber(value);
    let url = `http://localhost:8000/api/product/allproduct?pageNumber=${value}`
    fetchData(url);
  };

  const fetchData = (url) => {
    axios
      .get(`${url}`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let url = "http://localhost:8000/api/product/allproduct?pageNumber=1"
    fetchData(url);
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
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="container_SaleProduct_top_search_2">
              <select name="" id="" value={selectOption} onChange={(e) => setSelectOption(e.target.value)} onClick={handleCheckSelect}  >
                <option value="all" >All</option>
                <option value="new">New</option>
                <option value="sale">Sale</option>
                <option value="tang">Giá Tăng dần</option>
                <option value="giam">Giá giảm dần</option>
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
<<<<<<< HEAD
          <Stack >
            <Pagination count={3} variant="outlined" shape="rounded" />
=======
          <Stack>
            <Pagination count={Math.floor(data.length/9+1)} variant="outlined" shape="rounded"
              page={pageNumber}
              onChange={handleChangePageNumer}
            />
>>>>>>> tanphu
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SaleProduct;
