import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./CatalogManagement.scss";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const CatalogManagement = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, SetId] = useState("");
  const [sowadd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const [nameproduct, setNameProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [story, setStory] = useState("");
  const [warehouse, setWarehouse] = useState(1000);
  const [sowupdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const [sowupdatetb, setShowUpdateTB] = useState(false);
  const handleCloseUpdateTB = () => setShowUpdateTB(false);
  const handleShowUpdateTB = () => setShowUpdateTB(true);
  const [sowaddtb, setShowAddTB] = useState(false);
  const handleCloseAddTB = () => setShowAddTB(false);
  const handleShowAddTB = () => setShowAddTB(true);
  const navigation = useNavigate();

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
    let url = `http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=${search}`;
    fetchData(url);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then(function (response) {
        toast.success("Delete product successfully !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        handleClose();
        fetchData(
          `http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=${pageNumber}`
        );
      })
      .catch(function (error) {
        console.log(error);
        toast.error("X??a s???n ph???m th???t b???i !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  const handleAdd = (e) => {
    axios
      .post(`http://localhost:8000/api/product/addproduct`, {
        Color: color.split(","),
        NameProduct: nameproduct,
        Size: size.split(","),
        image: image.split(","),
        price: price,
        story: story,
        warehouse: warehouse,
      })
      .then(function (response) {
        toast.success("Th??m s???n ph???m th??nh c??ng !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        handleCloseAdd();
        fetchData(
          `http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=${pageNumber}`
        );
        handleCloseAddTB();
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Th??m s???n ph???m th???t b???i !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        handleCloseAddTB();
      });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        Color: color.split(","),
        NameProduct: nameproduct,
        Size: size.split(","),
        image: image.split(","),
        price: price,
        story: story,
        warehouse: warehouse,
      })
      .then(function (response) {
        toast.success("Ch???nh s???a s???n ph???m th??nh c??ng !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        handleCloseUpdate();
        handleCloseUpdateTB();
        fetchData(
          `http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=${pageNumber}`
        );
      })
      .catch(function (error) {
        console.log(error);
        handleCloseUpdateTB();
        toast.error("Ch???nh s???a s???n ph???m th???t b???i !!! ", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

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
    let url = `http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=${value}`;
    fetchData(url);
  };

  const handleGetApiUpdate = (ProductId) => {
    axios
      .get(`http://localhost:8000/api/product/${ProductId}`)
      .then(function (response) {
        setNameProduct(response.data.NameProduct);
        setImage(response.data.image.toString());
        setSize(response.data.Size.toString());
        setColor(response.data.Color.toString());
        setPrice(response.data.price);
        setWarehouse(response.data.warehouse);
        setStory(response.data.story);
        handleShowUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchData = (url) => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let url =
      "http://localhost:8000/api/product/all_product_admin?nameProduct=&pageNumber=1";
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
            <p
              onClick={() => {
                navigation("/home");
              }}
            >
              Trang ch???
            </p>
            <div className="container_catalog_body_search_input">
              <input
                type="text"
                placeholder="Search . . ."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={(e) => onPress_ENTER(e)}
              />{" "}
              <i class="bx bx-search-alt-2" onClick={handleSearch}></i>
            </div>
          </div>
          <div className="container_catalog_body_main">
            <div className="btn_add">
              <button onClick={handleShowAdd}>Th??m m???i</button>
            </div>
            <div className="container_catalog_user_right_table">
              <table>
                <tr>
                  <th>H??nh ???nh</th>
                  <th>T??n s???n ph???m</th>
                  <th>C??c Size</th>
                  <th>C??c M??u</th>
                  <th>Gi?? b??n</th>
                  <th>Lo???i</th>
                  <th>T???ng kho</th>
                  <th>Ch???c n??ng</th>
                </tr>
                {data.map((item) => (
                  <tr>
                    <td className="catalog_product">
                      <img src={item.image[0]} />
                    </td>
                    <td> {item.NameProduct}</td>
                    <td>
                      {item.Size.map((item) => (
                        <span>{item},</span>
                      ))}
                    </td>
                    <td>
                      {item.Color.map((item) => (
                        <span> {item},</span>
                      ))}
                    </td>
                    <td style={{ color: "#d63031", fontWeight: "600" }}>
                      {item.price}
                    </td>
                    <td>{item.story}</td>
                    <td>{item.warehouse}</td>
                    <td className="catalog_btn">
                      <button
                        onClick={() => {
                          handleShow();
                          SetId(item._id);
                        }}
                      >
                        X??a
                      </button>
                      <button
                        onClick={() => {
                          // handleShowUpdate();
                          handleGetApiUpdate(item._id);
                          SetId(item._id);
                        }}
                      >
                        S???a
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="navigation_page">
              <Stack>
                <Pagination
                  count={Math.floor(total.length / 4 + 1)}
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
      {/* modle x??a */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Th??ng b??o!</Modal.Title>
        </Modal.Header>
        <Modal.Body>B???n c?? mu???n x??a kh??ng?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ????ng
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            X??a
          </Button>
        </Modal.Footer>
      </Modal>

      {/* module th??ng b??o th??m */}
      <Modal
        show={sowaddtb}
        onHide={handleCloseAddTB}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Th??ng b??o!</Modal.Title>
        </Modal.Header>
        <Modal.Body>B???n c?? mu???n th??m s???n ph???m n??y kh??ng?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddTB}>
            ????ng
          </Button>
          <Button variant="danger" onClick={handleAdd}>
            Th??m
          </Button>
        </Modal.Footer>
      </Modal>

      {/*module th??m m???i */}

      <Modal show={sowadd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Th??m M???i S???n Ph???m</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>T??n S???n Ph???m C???n Th??m</Form.Label>
            <Form.Control
              type="text"
              value={nameproduct}
              onChange={(e) => {
                setNameProduct(e.target.value);
              }}
            />
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>???nh S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gi?? S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Size S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>M??u S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lo???i S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={story}
                onChange={(e) => {
                  setStory(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>T???ng Kho S???n Ph???m C???n Th??m</Form.Label>
              <Form.Control
                type="text"
                value={warehouse}
                onChange={(e) => {
                  setWarehouse(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            ????ng
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleShowAddTB();
              handleCloseAdd();
            }}
          >
            Th??m
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modle th??ng b??o */}
      <Modal
        show={sowupdatetb}
        onHide={handleCloseUpdateTB}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Th??ng b??o!</Modal.Title>
        </Modal.Header>
        <Modal.Body>B???n c?? mu???n c???p nh???t kh??ng?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateTB}>
            ????ng
          </Button>
          <Button variant="danger" onClick={handleUpdate}>
            C???p nh???t
          </Button>
        </Modal.Footer>
      </Modal>
      {/* module update  */}

      <Modal show={sowupdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>C???p Nh???t Th??ng Tin S???n Ph???m</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>T??n S???n Ph???m C???n C???p Nh???t</Form.Label>
            <Form.Control
              type="text"
              value={nameproduct}
              onChange={(e) => {
                setNameProduct(e.target.value);
              }}
            />
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>???nh S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gi?? S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Size S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>M??u S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lo???i S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={story}
                onChange={(e) => {
                  setStory(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>T???ng Kho S???n Ph???m C???n C???p Nh???t</Form.Label>
              <Form.Control
                type="text"
                value={warehouse}
                onChange={(e) => {
                  setWarehouse(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            ????ng
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleShowUpdateTB();
              handleCloseUpdate();
            }}
          >
            C???p nh???t
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer autoClose={500} />
    </div>
  );
};

export default CatalogManagement;
