import React from "react";
import Chart from "../../../components/Chart/Chart";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import "./AdminHome.scss";

const AdminHome = () => {
  return (
    <div>
      <div className="container_AdminHome">
        <div className="container_AdminHome_menu">
          <MenuAdmin />
        </div>
        <div className="container_AdminHome_body">
          <div className="container_AdminHome_body_search">
            <p>Trang chủ</p>
          </div>
          <div className="container_AdminHome_body_main">
            <div className="container_AdminHome_body_main_statistics">
              <div className="container_AdminHome_body_main_card">
                <i class="bx bxs-user-account"></i>
                <p>15</p>
                <span>Tài khoản</span>
              </div>
              <div className="container_AdminHome_body_main_card">
                <i class="bx bx-folder"></i>
                <p>20</p>
                <span>Sản phẩm</span>
              </div>
              <div className="container_AdminHome_body_main_card">
                <i class="bx bxs-package"></i>
                <p>190</p>
                <span>Đơn Hàng</span>
              </div>
            </div>
            <div className="container_AdminHome_body_main_chart">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
