import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (

        <footer style={{margin:"4rem 15rem"}}>
        <div className="row">
            <div className="col-sm-3">
              <h4 style={{fontWeight:"600",textTransform:"uppercase"}}>nhà máy sản xuất</h4>

              <p style={{fontWeight:"700",marginTop:"3rem",marginBottom:"0",textTransform:"uppercase",fontSize:"14px"}}>nhà máy sản xuất</p>
              <p style={{fontSize:"14px"}}>A2 - KCN Định Quán, Đồng Nai</p>

              <p style={{fontWeight:"700",marginTop:"1rem",marginBottom:"0",textTransform:"uppercase",fontSize:"14px"}}>nhà máy sản xuất</p>
              <p style={{fontSize:"14px", marginBottom:"0"}}>Vân Du - Thạch Thành, Thanh Hóa</p>

              <h5 style={{fontWeight:"700",textTransform:"uppercase",margin:"25px 0"}}>Kết nới với chúng tôi</h5>
              <img src='./img/ico_instagram.svg'></img>
              <img src='./img/ico_facebook.svg'></img>
              <img src='./img/ico_zalo.svg'></img>
            </div>
            <div className="col-sm-6">
              <h4 style={{fontWeight:"600",textTransform:"uppercase",marginBottom:"2rem"}}>hệ thống cửa hàng</h4>

              <p style={{fontWeight:"700",margin:"0",textTransform:"uppercase",fontSize:"14px"}}>Hà Nội</p>
              <p style={{fontSize:"14px"}}>Số 10, Ngõ 30, Nguyễn Thị Định, P.Trung Hòa, Cầu Giấy, Hà Nội - 0385162929</p>

              <p style={{fontWeight:"700",margin:"0",textTransform:"uppercase",fontSize:"14px"}}>TP.Hồ Chí Minh</p>
              <p style={{fontSize:"14px"}}>488 Cộng Hòa, P13, Quận Tân Bình - 0932181068</p>

              <p style={{fontWeight:"700",margin:"0",textTransform:"uppercase",fontSize:"14px"}}>Đà Nẵng</p>
              <p style={{fontSize:"14px"}}>114 Trẩn Thủ Độ, Khuê Trung, Cẩm Lệ, Đà Nẵng - 0343642299</p>

              <p style={{fontWeight:"700",margin:"0",textTransform:"uppercase",fontSize:"14px"}}>Cần Thơ</p>
              <p style={{fontSize:"14px"}}>164D Trần Ngọc Quế, Cần Thơ - 380 508 899</p>

             
            </div>
            <div className="col-sm-3">
              <h4 style={{fontWeight:"500",textTransform:"uppercase",marginBottom:"1rem"}}>hỗ trợ</h4>

              <p style={{fontWeight:"400",marginTop:"8px",textTransform:"uppercase",fontSize:"14px"}}>thông tin liên hệ</p>
              
              <p style={{fontWeight:"400",marginTop:"8px",textTransform:"uppercase",fontSize:"14px"}}>hướng dẫn mua hàng</p>
          
              <p style={{fontWeight:"400",marginTop:"8px",textTransform:"uppercase",fontSize:"14px"}}>chính sách đổi lại</p>
              
              <p style={{fontWeight:"400",marginTop:"8px",textTransform:"uppercase",fontSize:"14px"}}>chính sách giao hàng</p>
              
              <p style={{fontWeight:"400",marginTop:"8px",textTransform:"uppercase",fontSize:"14px"}}>chính sách thanh toán</p>
             
              <h5 style={{fontWeight:"700",marginTop:"40px",textTransform:"uppercase"}}>đặt hàng xuất khẩu</h5>
              <p style={{fontWeight:"700",margin:"0"}}>oder@mayvietviet.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;