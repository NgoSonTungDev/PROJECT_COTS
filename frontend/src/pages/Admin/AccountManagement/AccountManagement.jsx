import React from "react";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./AccountManagement.scss";

const AccountManagement = () => {

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
      <div className="container_AccountManagement">
        <div className="container_AccountManagement_menu">
          <MenuAdmin />
        </div>
        <div className="container_AccountManagement_body">
          <div className="container_AccountManagement_body_search">
            <p>Trang chủ</p>
            <div className="container_AccountManagement_body_search_input">
              <input
                type="text"
                placeholder="Search . . ."
                onKeyDown={(e) => onPress_ENTER(e)}
              />{" "}
              <i class="bx bx-search-alt-2"></i>
            </div>
          </div>
          <div className="container_AccountManagement_body_main">
            {/* code design body in here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
