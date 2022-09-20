import axios from "axios";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import "./Comment.scss";

const CommentProduct = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <div className="container_comment">
        <div className="container_comment_img">
          <img
            src="https://sme.hust.edu.vn/wp-content/uploads/2022/02/Avatar-Facebook-trang.jpg"
            alt=""
          />
        </div>
        <div className="container_comment_content">
          <div className="container_comment_content_name">
            <p>
              <b>NgoSonTung </b> &nbsp;
              <Rating
                name="simple-controlled"
                style={{ fontSize: "20px important",marginTop:"-2px"}}
                value={value}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </p>

            <span>2022-09-04 13:21</span>
          </div>
          <div className="container_comment_content_type">
            <p>
              Phân loại hàng : <span>màu Đen</span> | size XL
            </p>
          </div>
          <div className="container_comment_content_content">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam facere explicabo quia soluta voluptates asperiores ut neque, minima rerum fuga, suscipit quod eius cumque magnam harum veniam officia odit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentProduct;
