import React from "react";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./OrderManagement.scss";

const OrderManagement = () => {

  const onPress_ENTER = (event) => {
    var keyPressed = event.keyCode || event.which;
    if (keyPressed === 13) {
      alert("akjshdakjh");
      keyPressed = null;
    } else {
      return false;
    }
  };
  
  return (
    <div>
      <div className="container_OrderManagement">
        <div className="container_OrderManagement_menu">
          <MenuAdmin />
        </div>
        <div className="container_OrderManagement_body">
          <div className="container_OrderManagement_body_search">
            <p>Trang chủ</p>
            <div className="container_OrderManagement_body_search_input">
              <input
                type="text"
                placeholder="Search . . ."
                onKeyDown={(e) => onPress_ENTER(e)}
              />{" "}
              <i class="bx bx-search-alt-2"></i>
            </div>
          </div>
          <div className="container_OrderManagement_body_main">
            {/* code design in here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
