import React, { useEffect, useState } from "react";
import data from "./component/back/Data.js";
import { BrowserRouter} from "react-router-dom";
import Footer from "./component/front/Footer/Footer";
import Routing from "./component/front/Routes/Routing";

const App = ()=>{
  const {productItems} = data;
  const [cartItem, setCartItem] = useState([]);
  
  const handleAddItem = (product) => {
    
    const ProductExist = cartItem.find((item)=> item.id === product.id);
      if(ProductExist){
        setCartItem(
        cartItem.map((item) => 
          item.id === product.id ? 
            {...ProductExist, quantity: ProductExist.quantity + 1}
            : item)
        );
      } else{
        setCartItem([...cartItem, {...product, quantity: 1}])
      }
  }

  const handleRemoveItem = (product) => {
    const ProductExist = cartItem.find((item)=> item.id === product.id);
    if(ProductExist===1){
      setCartItem(cartItem.filter((item) => item.id !== product.id));
     } else{
      setCartItem(
        cartItem.map((item) => 
          item.id === product.id ? 
            {...ProductExist, quantity: ProductExist.quantity - 1}
            : item)
        );
    }
  }
  useEffect(()=>{
    localStorage.setItem('cartItem',JSON.stringify(cartItem));
  }, [cartItem]);





  return (
    <div className="app">
        <BrowserRouter>
          {/* <Header /> */}
            <Routing productItems={productItems} cartItem={cartItem} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem}/>
          <Footer />
        </BrowserRouter>
        
    </div>
  );
  
};

export default App;
