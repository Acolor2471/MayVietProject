import React from 'react';
// import { Link } from 'react-router-dom';
import "./Content.css"

const Content = () => {
  return (
    <div>
       <div className="row banner">
            <div className="col ">
                <div className="banner_1"  style={{ textAlign:"right"}}><img className="img_banner" src="./img/img_banner-01.png" alt="" ></img>
                <button className="btn_1" >ẤM ÁP</button>
                </div>
                
            </div>
            <div className="col">
                <div className="banner_2"  style={{ textAlign:"left"}}><img className="img_banner" src="./img/img_banner-02.png" alt="" ></img>
                <button className="btn_2" >NGỌT NGÀO</button>
                </div>
            </div>
        </div>
         <div className="row">
            <div className="col" style={{textAlign: 'center', position: 'relative'}}>
                <img src="./img/img_banner-03.png" style={{height: "293px", margin:' 40px 0', width: "1389px"}} alt=""></img>
                <div style={{position: 'absolute', textAlign: 'left', bottom: '98px', right: '45%'}}>
                    <h3 style={{fontSize: '36px', textTransform: 'uppercase', position: 'relative'}}>Bộ sưu tập <p style={{color:'white', top: '0', right: '30px',position: 'absolute',background: 'red',width: '40px',paddingTop: '3px',height: '20px',textAlign: 'center',fontSize: '14px',borderRadius: '3px'}}>Mới</p></h3>
                    <p style={{fontSize: '14px'}}>Miễn phí giao hàng toàn quốc. Bảo hành 1 năm.</p>
                    <button style={{width: '165px',height: '56px',left: '502px',background: '#090726',border: '1px solid #090726',borderRadius: '5px',color: 'white',textTransform: 'uppercase'}}>Mua ngay</button>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Content;