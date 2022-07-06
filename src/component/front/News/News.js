import React from 'react';
// import { Link } from 'react-router-dom';
import "./News.css"

const News = () => {
  return (
    <div>
        <div>
        <div className="row" style={{backgroundColor:'#82B9BC', padding:"90px 200px"}}>
            <div className="col">
                <div style={{textTransform:'uppercase', display:"flex", justifyContent:"center"}}>
                <img style={{height:"60px", width:"60px"}} src='./img/24.png'></img>
                <p style={{textTransform:"uppercase", fontSize: '20px', color: 'white', lineHeight: '60px', margin: '0'}}>Dịch vụ 24/7</p>
                </div>
            </div>
            <div className="col">
                <div style={{textTransform:'uppercase', display:"flex", justifyContent:"center"}}>
                <img style={{height:"60px", width:"60px"}}  src='./img/dola.png'></img>
                <p style={{textTransform:"uppercase", fontSize: '20px', color: 'white', margin: '0'}}>hoàn trả <br />miễn phí</p>
                </div>
            </div>
            <div className="col">
                <div style={{textTransform:'uppercase', display:"flex", justifyContent:"center"}}>
                <img style={{height:"60px", width:"60px"}}  src='./img/muahang.png'></img>
                <p style={{textTransform:"uppercase", fontSize: '20px', color: 'white', margin: '0'}}>theo dõi <br/> đơn hàng</p>
                </div>
            </div>
            <div className="col">
                <div style={{textTransform:'uppercase', display:"flex", justifyContent:"center"}}>
                <img style={{height:"60px", width:"60px"}}  src='./img/vanchuyen.png'></img>
                <p style={{textTransform:"uppercase", fontSize: '20px', color: 'white', margin: '0'}}>Giao hàng <br/> nhanh chóng</p>
                </div>
            </div>
        </div>
    </div>        


        <div style={{ marginBottom:'50px'}}>
            <h1 style={{ textAlign:"center", marginTop:'90px'}}>BÀI VIẾT</h1>
            <p style={{ textAlign:"center"}}>Nơi chia sẻ kiến thức bổ ích, cuộc thi và các chương trình khuyến mãi.</p>
            <div className="row" style={{padding:'40px 230px'}}>
                <div className="col-sm-4">
                    <img style={{height:"329px", width:"439px" ,textAlign:"center"}} src="./img/img_baiviet-01.png"></img>
                 <div>
                    <h4 style={{fontSize:"18px",margin:'20px 0'}}>Cuộc thi ảnh Nhà Đẹp Cùng Mây Xinh </h4>
                    <span style={{fontSize:"12px"}}>09/01/2019 · CUỘC THI</span>
                    <p style={{fontSize:"14px", fontWeight:"500", marginTop:'10px'}}>Một ngôi nhà đẹp thường có đồ xinh điểm tô cho không gian sống. Sau cánh cửa nhà chúng ta đều mong mỏi tìm tới...</p>
                    <p style={{fontWeight:"700",marginTop:"1rem",marginBottom:"0",textTransform:"uppercase",fontSize:"14px"}}>Xem tiếp</p>
                 </div>
                </div>
                <div className="col-sm-4" >
                    <img style={{height:"329px", width:"439px" ,textAlign:"center"}} src='./img/img_baiviet-02.png'></img>
                    <div>
                    <h4 style={{fontSize:"18px",margin:'20px 0'}}>3 Món Nội Thất Món Quà Tân Gia Được Yêu Thích Nhất</h4>
                    <span style={{fontSize:"12px"}}>09/01/2019 · CUỘC THI</span>
                    <p style={{fontSize:"14px", fontWeight:"500", marginTop:'10px'}}>Tân gia nhà được xem là niềm vui gia chủ sau những năm tháng ấm ủ, dành dụm, đạt thành tựu của gia chủ để có được ...</p>
                    <p style={{fontWeight:"700",marginTop:"1rem",marginBottom:"0",textTransform:"uppercase",fontSize:"14px"}}>Xem tiếp</p>
                 </div>
                </div>
                <div className="col-sm-4">
                    <img style={{height:"329px", width:"439px" ,textAlign:"center"}} src='./img/img_baiviet-03.png'></img>
                    <div>
                    <h4 style={{fontSize:"18px",margin:'20px 0'}}>Cuộc thi ảnh Nhà Đẹp Cùng Mây Xinh </h4>
                    <span style={{fontSize:"12px"}}>09/01/2019 · CUỘC THI</span>
                    <p style={{fontSize:"14px", fontWeight:"500", marginTop:'10px'}}>Một ngôi nhà đẹp thường có đồ xinh điểm tô cho không gian sống. Sau cánh cửa nhà chúng ta đều mong mỏi tìm tới...</p>
                    <p style={{fontWeight:"700",marginTop:"1rem",marginBottom:"0",textTransform:"uppercase",fontSize:"14px"}}>Xem tiếp</p>
                 </div>
                </div>    
            </div>
        </div>
        
        <div className="row" style={{backgroundColor:"#F3F2F4", padding:"110px 190px"}}>
            <div className="col-sm-2" style={{padding:"40px 0", textAlign:"center"}}>
                <img style={{height:"136px", width:"201px" }} src="./img/img_gallery-01.png"></img>
            </div>
            <div className="col-sm-3" style={{ textAlign:"center"}}>
                <img style={{height:"219px", width:"320px" }} src='./img/img_gallery-02.png'></img>
            </div>
            <div className="col-sm-2" style={{padding:"40px 0" , textAlign:"center"}}>
                <img style={{height:"136px", width:"201px"}} src='./img/img_gallery-03.png'></img>
            </div>
            <div className="col-sm-3" style={{textAlign:"center"}}>
                <img style={{height:"219px", width:"320px"}} src='./img/img_gallery-04.png'></img>
            </div>    
            <div className="col-sm-2" style={{padding:"40px 0", textAlign:"center"}}>
                <img style={{height:"136px", width:"201px"}} src='./img/img_gallery-05.png'></img>
            </div>
        </div>
        
    </div>
  );
};

export default News;