import React from "react";
import { PiHandbag } from "react-icons/pi";

import './FeaturedProducts.css'


const Cards = ({name, currPrice, prevPrice, img}) => {
  return (
    <>
      <div className="w-64 md:h-[360px] border rounded-md shadow">
        <div className="w-full md:h-[70%] flex justify-center items-center overflow-hidden">
          <img className="object-cover" src={img} alt="" />
        </div>
        <div className="px-5 mt-5 md:-mt-8 relative">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="flex flex-row-reverse justify-end items-center gap-2 mb-5 md:mb-0">
            <h4 className="text-base font-semibold my-2">₹ {currPrice}</h4>
            <h4 className="line-through text-sm my-2">₹ {prevPrice}</h4>
          </div>

          <button className="w-full bg-green-500 text-white rounded-md py-2 px-4 mb-5 md:mt-2 -mt-2">
            Add to Cart
          </button>

          <div className="absolute bottom-[76px] md:bottom-[72px] right-5 border rounded-full p-1 bg-gray-200">
            <PiHandbag size={"1.5rem"} />
          </div>


        </div>
      </div>
    </>
  );
};

export default Cards;
