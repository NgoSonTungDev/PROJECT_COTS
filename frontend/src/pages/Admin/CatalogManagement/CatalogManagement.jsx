import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./CatalogManagement.scss";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const CatalogManagement = () => {
    const [data, setData] = useState([]);

    const handleDelete = () => {
        axios
            .then(function (response) {
                toast.success("Xóa sản phẩm thành công ", {
                    position: toast.POSITION.BOTTOM_LEFT
                });

            })
            .catch(function (error) {
                console.log(error)
                toast.error("Xóa sản phẩm thất bại", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            })
        fetchData();
    }

    const handleAdd = () => {

    }
    const handleUpdate = () => {

    }

    const fetchData = () => {
        window.scrollTo(0, 0);
        axios
            .get("http://localhost:8000/api/product/allproduct")
            .then(function (response) {
                // console.log(response.data);
                setData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();

    }, []);
    return (
        <div>
            <div className="container_catalog">
                <div className="container_catalog_menu">
                    <MenuAdmin />
                </div>
                <div className="container_catalog_body">
                    <div className="container_catalog_body_search">
                        <p>Trang chủ</p>
                        <div className="container_catalog_body_search_input">
                            <input
                                type="text"
                                placeholder="Search . . ."
                            // onKeyDown={(e) => onPress_ENTER(e)}
                            />{" "}
                            <i class="bx bx-search-alt-2"></i>
                        </div>
                    </div>
                    <div className="container_catalog_body_main">
                        <div className="btn_add">
                            <button onClick={handleAdd}>Thêm mới</button>
                        </div>
                        <div className="container_catalog_user_right_table">
                            <table>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>các Size</th>
                                    <th>các Màu</th>
                                    <th>Giá bán</th>
                                    <th>Chức năng</th>
                                </tr>
                                {data.map((item) => (
                                    <tr>
                                        <td className="catalog_product">
                                            <img
                                                src={item.image[0]}
                                            />
                                        </td>
                                        <td> {item.NameProduct}</td>
                                        <td>{item.Size.map((item) => (
                                            <span>{item},</span>
                                        ))}</td>
                                        <td>{item.Color.map((item) => (
                                            <span> {item},</span>
                                        ))}
                                        </td>
                                        <td style={{ color: "#d63031", fontWeight: "600" }}>
                                            {item.price}</td>
                                        <td className="catalog_btn">
                                            <button onClick={handleDelete}>Xóa</button>
                                            <button onClick={handleUpdate}>Sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                autoClose={500}
            />
        </div>
    );
};

export default CatalogManagement;