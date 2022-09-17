import React from 'react';
import "./ProductDetail.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ProductDeail = () => {
    return (
        <div>
            <div className="productDetail">
                <div className="productDetail_top">
                    <div className="image">
                        <img src="https://product.hstatic.net/200000260587/product/b6cab97b491cbc42e50d_6d85a7f0498b4442832b5c0e3789bec0_master.jpg" alt="" />
                    </div>
                    <div className="describe">
                        <div className="information">
                            <b>MÔ TẢ</b>
                        </div>
                        <input type="number" name="" id="" />
                        <div className="describe_size">
                            <span> <input type="button" value="S" /></span>
                            <span> <input type="button" value="M" /></span>
                            <span> <input type="button" value="XL" /></span>
                        </div>
                        <div className="describe_tablesize">
                            <img src="https://martina.vn/wp-content/uploads/2020/07/thiet-ke-ao-dong-phuc-02.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="productDetail_conten">
                    <table>
                        <tr>
                            <th>SẢN PHẨM</th>
                            <th>GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG</th>
                        </tr>
                        <tr>
                            <td>GHẾ LƯỚI</td>
                            <td>300.vnd</td>
                            <td>5</td>
                            <td>1500.vnd</td>

                        </tr>
                    </table>
                    <div className="button">
                        <div className="button_see">
                            <input className='see' type="button" value="TIẾP TỤC XEM SẢN PHẨM" />
                        </div>
                        <div className="button_update">
                            <input className='update' type="button" value="CẬP NHẬT GIỎ HÀNG" />
                        </div>
                    </div>
                </div>
                <hr style={{ width: "55%", marginLeft: "20px" }} />
                <div className="productDetail-main">
                    <div className="productDetail_left">
                        <b>THÔNG TIN THANH TOÁN</b>
                        <div className="data_username">
                            <table>
                                <tr>
                                    <td>
                                        <input
                                            placeholder="Họ và tên"
                                        />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <input
                                            placeholder='Địa chỉ giao hàng'
                                        />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <input
                                            placeholder='Số điện thoại'
                                        />
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <input
                                            placeholder='Email'
                                        />
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                    <div className="productDetail_right">
                        <b>ĐƠN HÀNG CỦA BẠN</b>
                        <table>
                            <tr>
                                <th>SẢN PHẨM</th>
                                <th>TỔNG</th>
                            </tr>
                            <tr>
                                <td>GHẾ LƯỚI</td>
                                <td>399000</td>
                            </tr>
                            <tr>
                                <td>Tổng Phụ</td>
                                <td>34555</td>
                            </tr>
                            <tr>
                                <td>Tổng</td>
                                <td>874</td>
                            </tr>
                        </table>
                       <div className="bank">
                       <b><input type="checkbox" name="" id=""/>Chuyển khoảng ngân hàng</b>
                       <h1>Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng mã đơn hàng của bạn trong phần nội dung thanh toán. Dơn hàng được gioa sau khi tiền đã trả.</h1>
                       </div>
                    </div>
                </div>
                <div className="same-Product">
                    <h1>SAME PRODUCTS</h1>
                    <div className="slide">
                        <Carousel responsive={responsive}>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                            <div className='im'><img src="https://cf.shopee.vn/file/fe6f16c7d542cb01973212979a1765c3" alt="" /></div>
                        </Carousel>;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeail;