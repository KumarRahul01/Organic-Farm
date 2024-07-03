import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { PiPackage } from "react-icons/pi";
import { assets } from "../../assets/myImages";




const Hero = () => {
  return (
    <div className="">
      <div className="md:w-10/12 mx-auto bg-[#edf2ee] flex flex-col md:flex-row items-center mt-8 rounded-xl pt-5 md:pt-0 relative">
        {/* left */}
        <div className="md:w-6/12 w-full mx-auto md:pl-14 text-center md:text-left p-5 md:p-0">
          <p className="text-sm uppercase greenTextColor font-medium">
            welcom to organic farm
          </p>
          <h1 className="md:text-5xl text-3xl font-bold md:mt-3 mt-1">
            Fresh & Healthy
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold md:mt-3 mt-1">
            Organic Food
          </h1>
          <p className="md:mt-6 mt-5 text-xl font-medium">
            Sale up to{" "}
            <span className="font-semibold text-2xl warningBgColor">
              30% OFF
            </span>{" "}
          </p>
          <p className="mt-2 text-xs">
            Free shiping on all your order. we deliver, you enjoy
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center gap-2 text-white greenBgColor hover:ring-1 ring-green-500 rounded-3xl py-2 px-4 mt-5">
              Shop Now <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="md:w-5/12 flex justify-center w-full mx-auto overflow-hidden">
          <img className="bg-transparent w-fit" src={assets.bg_img} alt="image" />
        </div>

        <div className="absolute md:flex hidden gap-3 z-40 bottom-20 md:left-[50%] sliderContainer">
          <input type="radio" name="slider" id="slide1" />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
        </div>

        <div className="absolute hidden md:block -bottom-8 w-[90%] left-14 h-20 bg-white shadow-xl rounded-md">
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
              <BiSupport
                size={"1.5rem"}
                className="greenTextColor"
              />
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
              <TbShoppingBagCheck
                size={"1.5rem"}
                className="greenTextColor"
              />
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
              <PiPackage
                size={"1.5rem"}
                className="greenTextColor"
              />
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

export default Hero;
