import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { ImLeaf } from "react-icons/im";
import NewProducts from "../NewProducts";
import Footer from "../Footer";
import HotOffers from "../HorizontalOffers/HotOffers";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../context/ShoppingContext";
import toast from "react-hot-toast";

const ItemPages = () => {
  
  const { quantity, setQuantity, finalItems, cartItems } =
    useContext(ShoppingContext);

  const navigate = useNavigate();
  const prodData = JSON.parse(localStorage.getItem("showItemData"));

  useEffect(() => {
    console.log(prodData);
  }, []);

  const cartHandler = (prodData) => {
    // setItemQuantity((prev)=> prev+1);
    finalItems.push({
      prodId: prodData.itemId,
      name: prodData.itemName,
      currPrice: prodData.itemCurrPrice,
      prevPrice: prodData.itemPrevPrice,
      quantity: quantity,
    });
    toast.success(`${prodData.itemName} added to cart`);
    navigate("/Organic-Farm/cart");
  };

  const [desc, setDescription] = useState(true);
  const [info, setInfo] = useState(false);
  const [feedBack, setFeedBack] = useState(false);

  const cartDirectHandler = ()=>{
    navigate("/Organic-Farm/cart");
  }

  const descHanlder = () => {
    setDescription(true);
    setInfo(false);
    setFeedBack(false);
  };

  const infoHanlder = () => {
    setDescription(false);
    setInfo(true);
    setFeedBack(false);
  };

  const feedHanlder = () => {
    setDescription(false);
    setInfo(false);
    setFeedBack(true);
  };

  return (
    <>
      <div className="w-full">
        <Header />

        <div className="md:w-10/12 w-11/12 mx-auto shadow-md border rounded-xl  md:my-5 my-3 md:py-10">
          <div className="flex flex-row justify-between">
            {/* Left Side */}
            <div className="w-1/2 flex items-center justify-center overflow-hidden">
              <img
                className="md:w-[80%] w-full h-full overflow-hidden"
                src={prodData.itemImg}
                alt="image"
              />
            </div>

            {/* Right Side */}
            <div className="w-1/2 bg-yello-300 flex flex-col md:justify-center">
              <div className="relative mt-3 md:mt-0">
                <h1 className="md:text-2xl text-xl font-semibold w-24">
                  {prodData.itemName}
                </h1>
                <p className="absolute top-1 md:right-2/4 right-1 bg-green-200 px-2 py-1 rounded-md text-green-700 text-sm">
                  In Stock
                </p>
              </div>
              {/* Product Price */}
              <div className="my-3">
                <div className="flex">
                  <h3 className="font-medium line-through mr-3 md:text-xl text-md">
                    ₹ {prodData.itemPrevPrice}
                  </h3>
                  <h3 className="font-semibold md:text-xl text-md">
                    ₹ {prodData.itemCurrPrice}
                  </h3>
                </div>
                <hr className="h-[2px] mt-3 bg-slate-200" />
              </div>

              <div className="">
                <div className="flex flex-col md:flex-row">
                  <h3 className="text-md font-semibold">Brand:</h3>
                  <div className="flex items-center md:ml-3 mt-3 md:mt-0">
                    <ImLeaf className="greenTextColor" />{" "}
                    <span className="pl-1 font-medium">Organinc Farm</span>
                  </div>
                </div>
                {/* CTA Button */}
                <button
                  className="w-fit bg-green-500 font-medium hover:bg-green-600 text-white rounded-md py-2 px-4 md:mt-5 mt-3"
                  onClick={() => cartHandler(prodData)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <hr className="h-[1px] mt-5 md:mt-0 bg-slate-200" />

          <div className="p-5 sm:p-5 ">
            <div className="w-2/3 mx-auto flex md:flex-row md:gap-10 gap-5 justify-center md:items-center text-center mb-3">
              <button
                className="md:text-base md:border md:px-2 md:py-1 text-black rounded text-[13px] font-medium cursor-pointer md:hover:bg-slate-200 transition-all duration-150"
                onClick={() => descHanlder()}
              >
                Product Description
              </button>
              <button
                className="md:text-base md:border md:px-2 md:py-1 text-black rounded text-[13px] font-medium cursor-pointer md:hover:bg-slate-200 transition-all duration-150"
                onClick={() => infoHanlder()}
              >
                Additional Information
              </button>
              <button
                className="md:text-base md:border md:px-2 md:py-1 text-black rounded text-[13px] font-medium cursor-pointer md:hover:bg-slate-200 transition-all duration-150"
                onClick={() => feedHanlder()}
              >
                Customer Feedback
              </button>
            </div>
            {/* Description */}
            <div className="md:w-full w-11/12 mx-auto">
              {desc && (
                <div className="md:w-10/12 mx-auto my-5">
                  <h3 className="text-xl font-semibold mb-5">
                    Product Description
                  </h3>
                  <p className="text-[14px] sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam soluta tempore, doloribus repudiandae explicabo
                    perspiciatis magnam iste sequi, voluptas eveniet, fugiat est
                    quisquam libero veniam consequuntur nulla quia officia?
                    Illum.
                  </p>
                </div>
              )}

              {/* info */}

              {info && (
                <div className="md:w-10/12 mx-auto my-5">
                  <h3 className="text-xl font-semibold mb-5">
                    Additional Information
                  </h3>
                  <p className="text-[14px] sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam soluta tempore, doloribus repudiandae explicabo
                    perspiciatis magnam iste sequi, voluptas eveniet, fugiat est
                    quisquam libero veniam consequuntur nulla quia officia?
                    Illum.
                  </p>
                </div>
              )}

              {/* feedback */}
              {feedBack && (
                <div className="md:w-10/12 mx-auto my-5">
                  <h3 className="text-xl font-semibold mb-5">
                    Customer Feedback
                  </h3>
                  <p className="text-[14px] sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam soluta tempore, doloribus repudiandae explicabo
                    perspiciatis magnam iste sequi, voluptas eveniet, fugiat est
                    quisquam libero veniam consequuntur nulla quia officia?
                    Illum.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <NewProducts /> */}
      <div className="w-10/12 mx-auto my-5">
        <HotOffers />
      </div>
      <Footer />
    </>
  );
};

export default ItemPages;
