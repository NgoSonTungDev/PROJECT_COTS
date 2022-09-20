import React from 'react';
import "./History.scss";
import Navbar from '../../components/Navbar/Navbar';
const History = () => {
    return (
        <div>
            <Navbar />
            <div className="container_adminhistory">
                
                <div className="container_adminhistory_card">
                    <div className="container_adminhistory_card_text">
                        <h6>Thông tin khách hàng</h6>
                    </div>
                    <div className="container_card">
                        <div className="container_adminhistory_card_img">
                            <img className='image' src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg" alt="" />
                        </div>
                        <div className="container_adminhistory_card_img_text">
                            <div className="container_adminhistory_card_img_text_name">
                                <h6>tiểu nhỏ nhỏ</h6>
                            </div>
                            <div className="texts">
                                <div className="text1"><h6>Ho tên :</h6></div>
                                <div className="text2"><span>Phan tấn phú</span></div>
                            </div>
                            <div className="texts">
                                <div className="text1"><h6>SĐT :</h6></div>
                                <div className="text2"><span>0835129813</span></div>
                            </div>
                            <div className="texts">
                                <div className="text1"><h6>Địa chỉ :</h6></div>
                                <div className="text2"><span>242 tô hiệu</span></div>
                            </div>
                            <div className="texts">
                                <div className="text1"><h6>Email :</h6></div>
                                <div className="text2"><span>phantanphu1505@gmail.com</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_adminhistory_right">
                    <div className="container_history_text">
                        <h4>Lịch sử mua hàng</h4>
                    </div>
                    <table>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Size</th>
                            <th>Màu</th>
                            <th>Tổng tiền</th>
                            <th>Tình trạng</th>
                            <th>Chức năng</th>
                        </tr>
                        <tr>
                            <td>m01</td>
                            <td>áo </td>
                            <td>5</td>
                            <td>120</td>
                            <td>L</td>
                            <td>Đỏ</td>
                            <td>600</td>
                            <td>Chờ xác nhận</td>
                            <td>
                                <button>
                                    <i class='bx bx-pencil'></i> <span>Sửa</span>
                                </button>
                                <button>
                                    <i className="bx bxs-trash"></i> <span>Xóa</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>m01</td>
                            <td>áo </td>
                            <td>5</td>
                            <td>120</td>
                            <td>L</td>
                            <td>Đỏ</td>
                            <td>600</td>
                            <td>Chờ xác nhận</td>
                            <td>
                                <button>
                                    <i class='bx bx-pencil'></i> <span>Sửa</span>
                                </button>
                                <button>
                                    <i className="bx bxs-trash"></i> <span>Xóa</span>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default History;