import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuAdmin.scss";

const MenuAdmin = () => {
  const navigation = useNavigate();

  const username = localStorage.getItem("username");

  return (
    <div>
      <div className="container_menu_admin">
        <div className="container_menu_admin_intro">
          <div className="container_menu_admin_intro_img">
            <img
              src="https://sme.hust.edu.vn/wp-content/uploads/2022/02/Avatar-Facebook-trang.jpg"
              alt=""
            />
          </div>
          <div className="container_menu_admin_intro_text">
            <p>{username}</p>
            <i>admin</i>
          </div>
        </div>
        <div className="container_menu_admin_navbar">
          <li
            className={`option_menu_admin `}
            onClick={() => {
              navigation("/admin/home");
            }}
          >
            <i class="bx bx-home"></i> <span>Trang Chủ</span>
          </li>
          <li
            className={`option_menu_admin `}
            onClick={() => {
              navigation("/admin/catalog");
            }}
          >
            <i class="bx bx-list-plus"></i> <span>Quản lý danh mục</span>
          </li>
          <li
            className={`option_menu_admin `}
            onClick={() => {
              navigation("/admin/account");
            }}
          >
            <i class="bx bxs-user-account"></i> <span>Quản lý tài khoản</span>
          </li>
          <li
            className={`option_menu_admin  `}
            onClick={() => {
              navigation("/admin/order");
            }}
          >
            <i class="bx bxs-package"></i> <span>Quản lý đơn hàng</span>
          </li>
          <li
            className={`option_menu_admin  $`}
            onClick={() => {
              navigation("/admin/payment");
            }}
          >
            <i class="bx bx-wallet-alt"></i> <span>Quản lý thanh toán</span>
          </li>
          <li
            className="option_menu_admin"
            onClick={() => {
              navigation("/home");
              window.location.reload();
              localStorage.clear();
            }}
          >
            <i class="bx bx-log-out"></i> <span>Đăng xuất</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MenuAdmin;
