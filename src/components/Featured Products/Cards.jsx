import React, { useContext, useEffect, useState } from "react";
import { PiHandbag } from "react-icons/pi";
import "./FeaturedProducts.css";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ShoppingContext } from "../../context/ShoppingContext";
import { products } from "../../assets/featuredImages";
import { FaCheckCircle } from "react-icons/fa";

const Cards = ({ id, name, currPrice, prevPrice, img, showInfo, showData }) => {
  const { quantity, setQuantity } = useContext(ShoppingContext);

  const [itemQuantity, setItemQuantity] = useState(1);

  const cartData = [];

  const sendData = (obj) => {
    cartData.push(obj);
    toast.success(`Added ${name} to cart`);
    console.log(obj);
    // setItemQuantity((prev) => prev + 1);
    setQuantity((prev) => prev + 1);
  };

  const cartHandler = (id) => {
    sendData({
      id: id,
      name: name,
      currPrice: currPrice,
      prevPrice: prevPrice,
      img: img,
      quantity: itemQuantity,
    });
  };



  // localStorage.setItem('shops', JSON.stringify(finalData));

  return (
    <>
      <div className="lg:w-64 lg:h-[360px] w-60 border rounded-md shadow hover:border-2 hover:border-green-500 hover:shadow-xl transition-all duration-150 cursor-pointer mainContainer">
        <div className="w-full lg:h-[70%] flex justify-center items-center overflow-hidden imgContainer">
          <img
            className="object-cover transition-all duration-150"
            src={img}
            alt=""
          />
        </div>
        <div className="px-5 mt-5 lg:-mt-8 relative text-center">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="flex flex-row-reverse justify-center items-center gap-2 mb-5 lg:mb-0">
            <h4 className="text-base font-semibold my-2">₹ {currPrice} / Kg</h4>
            <h4 className="line-through text-sm my-2">₹ {prevPrice}</h4>
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mb-5 lg:mt-2 -mt-2"
            onClick={() => cartHandler(id)}
          >
            Add to Cart
          </button>

          {/* <div className="absolute bottom-[76px] lg:bottom-[72px] right-5 border rounded-full p-1 bg-gray-200 flex gap-2">
            <PiHandbag size={"1.5rem"} /> <span>{quantity}</span>
          </div> */}
        </div>

      </div>
    </>
  );
};

export default React.memo(Cards);