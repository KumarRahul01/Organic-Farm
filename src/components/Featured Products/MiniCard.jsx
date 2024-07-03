import React from "react";
import { PiHandbag } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./MiniCard.css"

const MiniCard = ({name, prevPrice, currPrice, img}) => {
  return (
    <div className="flex gap-2 border w-60 h-20 rounded-md hover:cursor-pointer hover:border-green-500 transition-all duration-150">
      <div className="w-40 h-20 overflow-hidden p-1">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="w-full flex flex-col pl-3 justify-center cardDetails relative">
        <h3 className="mb-2">{name}</h3>
        <div className="flex items-center flex-row-reverse justify-end gap-3">
          <h4>₹ {currPrice}</h4>
          <h4 className="line-through text-sm">₹ {prevPrice}</h4>
        </div>

        {/* Absolute */}
        <div className="hidden absolute w-fit cardOption flex-col -space-y-[2px] gap-2">
          <div className="md:bottom-2 ml-[90px] border rounded-full p-[6px] bg-gray-200 cursor-pointer">
            <MdOutlineRemoveRedEye size={"1.23rem"} />
          </div>
          <div className="md:bottom-2 ml-[90px] border rounded-full p-[6px] bg-gray-200 cursor-pointer">
            <PiHandbag size={"1.23rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
