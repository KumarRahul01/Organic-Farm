import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../../assets/myImages";


const HeroCarousel = () => {
  return (
    <>
      {/* left */}
      <div className="lg:w-6/12 w-full mx-auto lg:pl-14 text-center lg:text-left p-5 lg:p-0">
        <p className="text-sm uppercase greenTextColor font-medium">
          welcom to organic farm
        </p>
        <h1 className="lg:text-5xl text-3xl font-bold lg:mt-3 mt-1">
          Fresh & Healthy
        </h1>
        <h1 className="lg:text-5xl text-3xl font-bold lg:mt-3 mt-1">
          Organic Food
        </h1>
        <p className="lg:mt-6 mt-5 text-xl font-medium">
          Sale up to{" "}
          <span className="font-semibold text-2xl warningBgColor">30% OFF</span>{" "}
        </p>
        <p className="mt-2 text-xs">
          Free shiping on all your order. we deliver, you enjoy
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="flex items-center gap-2 text-white greenBgColor hover:ring-1 ring-green-500 rounded-3xl py-2 px-4 mt-5">
            Shop Now <FaArrowRightLong />{" "}
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="lg:w-5/12 flex justify-center w-full mx-auto overflow-hidden">
        <img className="bg-transparent w-fit" src={assets.bg_img} alt="image" />
      </div>
    </>
  );
};

export default HeroCarousel;
