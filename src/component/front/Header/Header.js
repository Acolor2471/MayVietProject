import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header>
          <div className="row" style={{marginBottom: "10px" , padding:"0 250px"}}>
            <div className="col" style={{margin: "10px 15px"}}>
                <p style={{fontWeight:"700", fontSize: "18px"}}><span style={{fontWeight: "400", fontSize: "14px"}}>Tổng đài:</span> 18008100</p>
            </div>
            <div className="logo col">
                <div  className="logo1" >
                    <Link to='/giohang'><img src="img/ico_gio-hang.svg" alt="" style={{position: "relative"}}></img></Link>
                    <p className="gioHang" style={{position: "absolute"}}>1</p>
                    <img className="logo1" src="./img/ico_yeu-thich].svg" alt=""></img>
                <img className="logo1" src="./img/ico_tim-kiem.svg" alt=""></img>
                </div>               
            </div>
        </div>
    
        <a style={{textDecoration:'none'}} href='/'><h1 className="logo_mayviet">Mây Việt</h1></a>
        <div className="row" style={{marginBottom: "15px"}}>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <table style={{width:"100%"}}>
            <tr className="tab_mayviet">
                <th>PAPASAN</th>
                <th>SOFA MÂY</th>
                <th>BÀN MÂY</th>
                <th>GHẾ MÂY ĐƠN</th>
                <th>GIƯỜNG TỦ</th>
                <th>THÙNG ĐỰNG RÁC</th>
                <th>VẬT DỤNG DECOR</th>
            </tr>
        </table>
            </div>
            <div className="col-sm-2"></div>
        </div>
       
        
    </header>
  )
}

export default Header;