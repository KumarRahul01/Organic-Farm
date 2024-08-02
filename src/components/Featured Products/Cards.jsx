import React, { useContext, useEffect, useState } from "react";
import { PiHandbag } from "react-icons/pi";
import "./FeaturedProducts.css";
import "./Card.css";
import { json, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ShoppingContext } from "../../context/ShoppingContext";
import { products } from "../../assets/featuredImages";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Cards = ({ id, name, currPrice, prevPrice, img }) => {
  const navigate = useNavigate();

  const { quantity, setQuantity, finalItems, cartItems } =
    useContext(ShoppingContext);

  const [itemQuantity, setItemQuantity] = useState(1);

  const cartHandler = (id) => {
    // setItemQuantity((prev)=> prev+1);
    finalItems.push({
      prodId: id,
      name: name,
      currPrice: currPrice,
      prevPrice: prevPrice,
      quantity: itemQuantity,
    });
    toast.success(`${name} added to cart`);
  };

  const showItemPage = (name) => {
    navigate(`/Organic-Farm/products/${name}`);
    const data = {
      itemId: id,
      itemName: name,
      itemCurrPrice: currPrice,
      itemPrevPrice: prevPrice,
      itemQuantity: itemQuantity,
      itemImg: img,
    };
    localStorage.setItem("showItemData", JSON.stringify(data));
  };


  return (
    <>
      <div
        className="lg:w-64 lg:h-[360px] w-60 border rounded-md shadow hover:border-2 hover:border-green-500 hover:shadow-xl transition-all duration-150 cursor-pointer mainContainer relative"
      >
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
            className="w-full bg-green-500 font-medium hover:bg-green-600 text-white rounded-md py-2 px-4 mb-5 lg:mt-2 -mt-2"
            onClick={() => cartHandler(id)}
          >
            Add to Cart
          </button>

          {/* <div className="absolute bottom-[76px] lg:bottom-[72px] right-5 border rounded-full p-1 bg-gray-200 flex gap-2">
            <PiHandbag size={"1.5rem"} /> <span>{itemQuantity}</span>
          </div> */}


        </div>
        <div className="absolute hidden setblock bg-slate-200 p-1 rounded-full z-20 top-2 right-3" onClick={() => showItemPage(name)}>
            <MdOutlineRemoveRedEye size={"1.35rem"} />
          </div>
      </div>
    </>
  );
};

export default React.memo(Cards);
