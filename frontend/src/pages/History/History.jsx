import React from 'react';
import "./History.scss";
import Navbar from '../../components/Navbar/Navbar';
const History = () => {
    return (
        <div>
            <Navbar />
            <div className="Container_History">
                <div className="container_History_text">
                    <h2>Lịch sử mua hàng của bạn</h2>
                </div>
                <div className="Container_History_Table">
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