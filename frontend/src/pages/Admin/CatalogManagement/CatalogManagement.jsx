import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./CatalogManagement.scss";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CatalogManagement = () => {
    const [data, setData] = useState([]);
    const user = JSON.parse(localStorage.getItem("dataUser"));
    const [total, setTotal] = useState([]);
    const [pageNumber, setpageNumber] = useState(1);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [sowadd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const [nameproduct, setNameProduct] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [story, setStory] = useState("");
    const [warehouse, setWarehouse] = useState("");
    const [comment, setComment] = useState("");



    const onPress_ENTER = (event) => {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            handleSearch();
            keyPressed = null;
        } else {
            return false;
        }
    };

    const handleSearch = () => {
        let url = `http://localhost:8000/api/product/allproduct?productName=${search}`;
        fetchData(url)
    };

    const handleDelete = async (e) => {
        await axios
            // .delete(`http://localhost:8000/api/product${e}`)
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

    const handleAdd = async (e) => {
        await axios
            .post(`http://localhost:8000/api/product/addproduct`, {
                NameProduct: nameproduct,
                image: image.split(";"),
                price: price,
                Size: size.split(";"),
                Color: color.split(";"),
                story: story,
                warehouse: warehouse,
                comment: comment,
            })
            .then(function (response) {
                toast.success("Thêm sản phẩm thành công ", {
                    position: toast.POSITION.BOTTOM_LEFT
                });

            })
            .catch(function (error) {
                console.log(error)
                toast.error("Thêm sản phẩm thất bại", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            })
        fetchData();
    }
    const handleUpdate = () => {

    }

    const getLength = () => {
        axios
            .get("http://localhost:8000/api/product/allproduct")
            .then(function (response) {
                setTotal(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleChangePageNumer = (event, value) => {
        setpageNumber(value);
        let url = `http://localhost:8000/api/product/allproduct?pageNumber=${value}`;
        fetchData(url);
    };

    const fetchData = (url) => {
        axios
            .get(url)
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        let url = "http://localhost:8000/api/product/allproduct?pageNumber=1";
        fetchData(url);
        getLength();
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
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                                onKeyDown={(e) => onPress_ENTER(e)}
                            />{" "}
                            <i class="bx bx-search-alt-2" onClick={handleSearch}></i>
                        </div>
                    </div>
                    <div className="container_catalog_body_main">
                        <div className="btn_add">
                            <button
                                onClick={() => {
                                    handleShowAdd();
                                }}>Thêm mới</button>
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
                                            <button onClick={() => {
                                                handleShow();
                                                handleDelete(item._id);
                                            }}
                                            >
                                                Xóa
                                            </button>
                                            <button onClick={handleUpdate}>Sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <div className="navigation_page">
                            <Stack>
                                <Pagination
                                    count={Math.floor(total.length / 9 + 1)}
                                    variant="outlined"
                                    shape="rounded"
                                    page={pageNumber}
                                    onChange={handleChangePageNumer}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* thêm mới */}
            <Modal show={sowadd}
                onHide={handleCloseAdd}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Mới Sản Phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tên Sản Phẩm</Form.Label>
                        <Form.Control
                            type="text"
                            value={nameproduct}
                            onChange={(e) => { setNameProduct(e.target.value) }}
                        />
                    </Form.Group>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ẢNH</Form.Label>
                            <Form.Control type="file"
                                value={image}
                                onChange={(e) => { setImage(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Giá</Form.Label>
                            <Form.Control
                                type="string"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Size</Form.Label>
                            <Form.Control
                                type="string"
                                value={size}
                                onChange={(e) => { setSize(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Màu</Form.Label>
                            <Form.Control
                                type="string"
                                value={color}
                                onChange={(e) => { setColor(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>story</Form.Label>
                            <Form.Control
                                type="string"
                                value={story}
                                onChange={(e) => { setStory(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>warehouse</Form.Label>
                            <Form.Control
                                type="string"
                                value={warehouse}
                                onChange={(e) => { setWarehouse(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>comment</Form.Label>
                            <Form.Control
                                type="string"
                                value={comment}
                                onChange={(e) => { setComment(e.target.value) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>




            <ToastContainer
                autoClose={500}
            />
        </div>
    );
};

export default CatalogManagement;