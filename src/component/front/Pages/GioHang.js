import React from 'react';
import { Link } from 'react-router-dom';
import "./GioHang.css";


const GioHang = ({cartItem,handleAddItem,handleRemoveItem}) => {
  const thanhTien = cartItem.reduce((gia,item) => gia + item.quantity * item.gia,0)
    return (
    <div style={{padding:'0px 250px'}} className="row">
        <hr/>
        <div className='col-sm-8'>
            
                <table>
                    <tr>
                        <th style={{fontWeight:"400",width:'5%', color:"#52627C"}}><input type="checkbox" className="form-check-input" id="exampleCheck1"></input></th>
                        <th style={{fontWeight:"400", width:'45%', color:"#52627C", textAlign:"center"}}>Giỏ Hàng | Xóa giỏ hàng</th>
                        <th style={{fontWeight:"400", width:'15%', color:"#52627C", textAlign:"center"}}>Đơn giá</th>
                        <th style={{fontWeight:"400",width:'20%', color:"#52627C", textAlign:"center"}}>Số lượng</th>
                        <th style={{fontWeight:"400",width:'15%', color:"#52627C", textAlign:"center"}}>Thành tiền</th>
                        <th style={{fontWeight:"400",width:'5%', color:"#52627C", textAlign:"center"}}>X</th>
                    </tr>
                    
                    {cartItem.map((item) => (
                        // <div key={item.id} className="cart-item-list">
                        //     <img style={{width:"20px", height:"20px"}}src={item.img} alt={item.name}></img>
                        // </div>
                        <tr key={item.id}>
                        <td><input type="checkbox" className="form-check-input" id="exampleCheck1"></input></td>
                        <td style={{display: 'flex', justifyContent: 'left'}}>
                            <img style={{width:"48px", height:"48px", margin:"10px"}}src={item.img} alt={item.name}></img>
                            <p style={{margin:"0", lineHeight:"60px",fontSize:"16px",fontWeight:"600"}}>{item.name}</p>
                        </td>
                        <td style={{textAlign:"center",fontWeight:"600"}}>{item.gia} đ</td>
                        <td style={{textAlign:"center",fontWeight:"600"}}>
                            <div className="buttons_added">
                                <input className="minus is-form" type="button" value="-" onClick={()=>handleRemoveItem(item)}></input>
                                <input aria-label="quantity" class="input-qty" max="10" min="0" name="" type="number" value={item.quantity}></input>
                                <input className="plus is-form" type="button" value="+" onClick={()=>handleAddItem(item)}></input>
                            </div>
                        </td>
                        <td style={{textAlign:"center",fontWeight:"600"}} >{item.quantity *item.gia } đ</td>
                        <td style={{textAlign:"center",fontWeight:"600"}}><a href='/'><img src='./img/ico_xoa.svg'></img></a></td>
                    </tr>
                    ))}
                        

                </table>
                {cartItem.length === 0 && (
                <div>no item are add</div>
                )}


        </div>
        <div className='col-sm-4 card'>
        <h4 style={{textTransform:"uppercase", padding:'20px 0', color:"#52627C"}}>tổng giỏ Hàng</h4>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <p>Tạm tính<span  style={{fontWeight:'800'}}> x </span></p> 
                <p style={{fontWeight:'700'}}>18000000 đ</p> 
            </div>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <p>Phí vận chuyển <span  style={{fontWeight:'800'}}> x </span></p> 
                <p  style={{fontWeight:'700'}}>Freeship</p> 
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <p>Tổng cộng </p> 
                <p  style={{fontWeight:'700'}}>{thanhTien} đ</p> 
        
            </div>
        <Link to="/thanhtoan"><button style={{width:'100%', height: '40px', border: '0', color: 'white', backgroundColor:"#00A79D", fontSize:"14px",fontWeight:'700', borderRadius:'10px', marginBottom:"20px"}}>Mua Hàng</button></Link>
        </div>

       
        
    </div>

  );
};

export default GioHang;