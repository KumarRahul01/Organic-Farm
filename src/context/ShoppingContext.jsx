import {createContext, useState } from "react";
import { featuredVegetables } from "../assets/featuredVeges";

export const ShoppingContext = createContext();

 const CartDetails = ({children})=>{

  const [quantity, setQuantity] = useState(0);
  // const [cartItems, setCartItems] = useState(1);

  const finalItems = [];


  // const showProducts = (item)=>{
  //   console.log("Product Printed", item);
  // };
  

  return (
    <ShoppingContext.Provider value={{quantity, setQuantity, finalItems}}>
      {children}
    </ShoppingContext.Provider>
  );
 } 

export default CartDetails;
