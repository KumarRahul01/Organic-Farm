import React, { useContext, useState } from "react";
import Cards from "./Cards";
import { featuredVegetables } from "../../assets/featuredVeges.js";
import SectionTitle from "../SectionTitle.jsx";
import toast from "react-hot-toast";
import { ShoppingContext } from "../../context/ShoppingContext.jsx";
import { FaCheckCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import HotOffers from "../HorizontalOffers/HotOffers.jsx";

const FeaturedProducts = () => {

  const navigate = useNavigate();

  const cartNavigate = () => {
    navigate("/Organic-Farm/cart");
  };

  return (
    <div className="lg:w-10/12 mx-auto w-full p-5 lg:p-0 lg:mt-28">
      <SectionTitle sectionName={"Featured Products"} />

      {/* Go to Cart Btn */}
      <button className="absolute top-0 right-36 border rounded-md px-2 py-1 bg-green-500 hover:bg-green-600 transition-all duration-150 text-white flex gap-2" onClick={()=> cartNavigate()}>
        <h3 className="lg:font-medium">Go To Cart</h3>
        <PiHandbag size={"1.5rem"} />
      </button>

      
      {/* Horizontal cards */}
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:justify-start justify-center lg:items-center lg:gap-5 gap-10 mb-10 lg:mb-20">
        {featuredVegetables.map((vegetable, i) => {
          return (
            <Cards
              key={i}
              vegetable={vegetable}
              id={vegetable.id}
              img={vegetable.img}
              name={vegetable.name}
              prevPrice={vegetable.prevPrice}
              currPrice={vegetable.currPrice}
              // showInfo={showProducts}
            />
          );
        })}
      </div>
      <HotOffers />
    </div>
  );
};

export default React.memo(FeaturedProducts);
