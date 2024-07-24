import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../context/ShoppingContext";

const Cart = () => {
  const { setQuantity } = useContext(ShoppingContext);

  const navigate = useNavigate();

  // const data = JSON.parse(localStorage.getItem("allData"));
  // const itemData = [];
  // data.forEach((item) => {
  //   itemData.push(item[0]);
  // });
  // useEffect(() => {
  //   console.log("Item Data Before", itemData);
  // }, []);

  // let show = null;
  // if (data.length > 0) {
  //   show = true;
  // } else {
  //   show = false;
  // }

  const [showData, setShowData] = useState(true);

  // const [count, setCount] = useState(1);

  // const increaseValue = () => {
  //   setCount(count + 1);
  // };

  // const handleRemove = (item) => {
  //   console.log("Item Name", item.name);
  //   const newData = itemData.filter((item) => item.name === "Tomato");
  //   console.log(newData);
  // };

  const placeOrder = () => {
    toast.success("Order placed successfully!");
    setQuantity(0);
    localStorage.clear();
    navigate("/Organic-Farm/");
  };

  return (
    <div className="lg:w-10/12 mx-auto">
      <div className="my-10 px-5 lg:px-0 font-semibold lg:text-3xl text-xl text-center">
        Shopping Cart
      </div>

      {showData ? (
        <>
          <div>
            <div className="w-full py-5 bg-gray-200">
              <div className="w-full flex flex-row text-center gap-2 sm:gap-0 p-5 lg:p-0">
                {/* heading */}
                <div className="w-1/5 lg:text-xl text-[16px] sm:text-base font-semibold lg:pl-6">
                  Product
                </div>
                <div className="w-1/5 lg:text-xl text-[16px] sm:text-base font-semibold lg:pl-4">
                  Price
                </div>
                <div className="w-1/5 lg:text-xl text-[16px] sm:text-base font-semibold">
                  Quantity
                </div>
                <div className="w-1/5 lg:text-xl text-[16px] sm:text-base font-semibold">
                  Total Amount
                </div>
                <div className="w-1/5 lg:text-xl text-[16px] sm:text-base font-semibold b-yellow-800">
                  Delete
                </div>
                {/* <div className="w-1/6 text-xl font-semibold">Place Order</div> */}
              </div>

              {/* Cart Data Items */}
              {itemData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 p-5 font-medium text-center"
                >
                  <div className="">{item.name}</div>
                  <div className="numFont">{item.currPrice}</div>
                  <div className="numFont">
                    <button
                      className="bg-gray-500 px-2 text-xl mr-2"
                      onClick={() => increaseValue()}
                    >
                      +
                    </button>
                    {count}
                    <button
                      className="bg-gray-500 px-2 text-xl ml-2"
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                  </div>
                  <div className="numFont">{item.currPrice}</div>
                  <div>
                    <button onClick={() => handleRemove(item)}>
                      <MdDelete size={"1.5rem"} />
                    </button>
                  </div>
                  {/* <div>
                <button onClick={() => handleRemove()}>
                  <FaCheckCircle size={"1.5rem"} />
                </button>
              </div> */}
                </div>
              ))}
            </div>
            <div className="flex justify-end p-5">
              <button
                className="bg-green-400 hover:bg-green-500 hover:ring-2 ring-green-400 transition-all duration-150 font-semibold px-4 py-2 rounded"
                onClick={() => placeOrder()}
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Please Add something to your cart</h3>
        </>
      )}
    </div>
  );
};

export default React.memo(Cart);
