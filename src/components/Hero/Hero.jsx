import React from "react";
import "./Hero.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { PiPackage } from "react-icons/pi";
import HeroCarousel from "./HeroCarousel";


const Hero = () => {

  return (
    <div className="">
      <div className="lg:w-10/12 mx-auto bg-[#edf2ee] flex flex-col lg:flex-row items-center mt-8 rounded-xl pt-5 lg:pt-0 relative">
          <HeroCarousel />

        {/* <div className="absolute lg:flex hidden gap-3 z-40 bottom-20 lg:left-[50%] sliderContainer">
          <input type="radio" name="slider" id="slide1" />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
        </div> */}

        <div className="absolute hidden lg:block -bottom-8 w-[90%] left-14 h-20 bg-white shadow-xl rounded-md">
          <div className="w-full flex justify-around items-center h-full px-4 py-2">
            <div className="flex items-center gap-4">
              {/* img */}
              <LiaShippingFastSolid
                size={"1.5rem"}
                className="greenTextColor"
              />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Free Shiping</h2>
                <p className="text-xs font-light mt-1">
                  Free shiping on all your orders
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-center gap-4">
              {/* img */}
              <BiSupport size={"1.5rem"} className="greenTextColor" />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Customer Support 24x7</h2>
                <p className="text-xs font-light mt-1">
                  Instant access to support
                </p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex items-center gap-4">
              {/* img */}
              <TbShoppingBagCheck size={"1.5rem"} className="greenTextColor" />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">100% Secure Payment</h2>
                <p className="text-xs font-light mt-1">
                  We ensure your money is safe
                </p>
              </div>
            </div>

            {/* 4th */}
            <div className="flex items-center gap-4">
              {/* img */}
              <PiPackage size={"1.5rem"} className="greenTextColor" />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Money Back Guarantee</h2>
                <p className="text-xs font-light mt-1">
                  30 Days money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
