import React from 'react';
import Content from '../Content/Content';
import News from '../News/News';
// import GioHang from '../Pages/GioHang';
import './Products.css';

const Products = ({productItems, handleAddItem,handleRemoveItem}) => {
  return (
    <div> 
      <Content />
      {/* <GioHang/> */}
      <div style={{textAlign:"center"}}>
        <h1 style={{marginTop:'2rem'}}>SẢN PHẨM NỔI BẬC</h1>
        <p style={{fontSize: '16px'}}>Với hơn 100 công nhân viên hoạt động sản xuất trong ngành nội thất mây, chúng tôi luôn nỗ lực và phấn <br/> đấu để cho ra đời những sản phẩm đẹp nhất, chất lượng nhất.</p>
      <div className='products' style={{padding:"60px 230px"}}>
        <div className='row'>
          {productItems.map((productItem)=>{
            return (
              <div className='col-sm-3'>
                  <div style={{position:'relative'}}>
                  <img className='productImg' style={{width:"320px", height:'320px'}} src={productItem.img} alt={productItem.name} />
                    <p style={{color:'white' ,left: '30px',top: '20px', right: '30px',position: 'absolute', background: 'red',width: '45px', paddingTop: '3px',height: '25px',textAlign: 'center', fontSize: '14px',borderRadius: '3px'}}>MỚI</p>
                    <img style={{position: 'absolute', right: '30px',top: '20px', width: '28px', height: '28px'}} src="./img/ico_yeu-thich].svg" alt=""></img>
                  </div>
                  <div style={{textAlign: 'left', margin: '15px 13px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '12px', fontWeight: '400', textTransform:'uppercase'}}>{productItem.loai}</div> 
                    <div style={{fontSize: '10px'}}>
                      <i className="fa-solid fa-star"></i> 
                      <i className="fa-solid fa-star"></i> 
                      <i className="fa-solid fa-star"></i> 
                      <i className="fa-solid fa-star"></i> 
                      <i className="fa-solid fa-star"></i> 
                    </div>
                  </div>
                  <p style={{fontSize:'18px',fontWeight: '600', padding: '5px 0' , margin: '0'}}>{productItem.name}</p>
                  <div style={{marginTop: '5px'}}>
                              <div style={{display:'inline-flex'}}>
                                <div style={{width: '13px', height: '13px' ,borderRadius: '50%', background: '#E9C697', marginRight: '5px'}}></div>
                                <div style={{width: '13px',height: '13px' , borderRadius: '50%', background: '#814225'}}></div>
                              </div>
                          </div>
                        
                          <div style={{display: 'flex', justifyContent: 'space-between'}}>
                              <div>
                                  <p style={{margin: '0', fontWeight: '200', fontSize: '12px',textDecoration: 'line-through'}}>{productItem.giacu}đ</p>
                                  <p style={{margin: '0', color: '#D71010', fontSize: '15px', fontWeight: '500'}}>{productItem.gia}đ</p>
                              </div>
                              <button className='btn_AddCart' style={{width: '40px', height: '40px', background: 'white', border: '1px solid #F0EAEA', borderRadius: '2px'}} 
                               onClick={()=>handleAddItem(productItem)}><img src="./img/ico_gio-hang.svg" alt=""></img></button>
                               
                          </div>

                  </div>
              </div>
            )
            
          })}
        </div>
      </div>
      </div>
      <News/>
    </div>
  );
};


export default Products;