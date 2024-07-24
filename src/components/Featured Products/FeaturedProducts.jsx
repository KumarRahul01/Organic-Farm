import React, { useContext, useState } from "react";
import Cards from "./Cards";
import MiniCard from "./MiniCard";
import { featuredVegetables } from "../../assets/featuredVeges.js";
import { Hotveges } from "../../assets/HotVeges";
import SectionTitle from "../SectionTitle.jsx";
import toast from "react-hot-toast";
import { ShoppingContext } from "../../context/ShoppingContext.jsx";
import { FaCheckCircle } from "react-icons/fa";

const FeaturedProducts = () => {
  const { showProducts, saveData } = useContext(ShoppingContext);

  return (
    <div className="lg:w-10/12 mx-auto w-full p-5 lg:p-0 lg:mt-28">
      <SectionTitle sectionName={"Featured Products"} />
      <button
        className="absolute top-0 right-36 flex items-center gap-4 w-[150px] bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mb-5 lg:mt-2 -mt-2"
      >
        <h3>View Cart</h3>
        <FaCheckCircle size={"1.5rem"} />
      </button>
      {/* Horizontal cards */}
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:justify-start justify-center lg:items-center lg:gap-5 gap-10 mb-10 lg:mb-20">
        {featuredVegetables.map((vegetable, i) => {
          return (
            <Cards
              key={i}
              id={vegetable.id}
              img={vegetable.img}
              name={vegetable.name}
              prevPrice={vegetable.prevPrice}
              currPrice={vegetable.currPrice}
              showInfo={showProducts}
            />
          );
        })}
      </div>

      {/* Vertical Cards */}
      <div className="flex lg:gap-5 overflow-x-auto overflow-y-hidden lg:mb-20">
        {/* Hot Deals */}
        <div>
          <h2 className="mb-2 font-semibold px-5 lg:px-0">Hot Deals</h2>
          <div className="flex p-5 lg:p-0">
            <div className="flex flex-col gap-3">
              {Hotveges.map((vegetable, i) => {
                return (
                  <MiniCard
                    key={i}
                    vegetable={vegetable}
                    img={vegetable.img}
                    name={vegetable.name}
                    prevPrice={vegetable.prevPrice}
                    currPrice={vegetable.currPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Best Seller */}
        <div>
          <h2 className="mb-2 font-semibold px-5 lg:px-0">Best Seller</h2>
          <div className="flex p-5 lg:p-0">
            <div className="flex flex-col gap-3">
              {Hotveges.map((vegetable, i) => {
                return (
                  <MiniCard
                    key={i}
                    vegetable={vegetable}
                    img={vegetable.img}
                    name={vegetable.name}
                    prevPrice={vegetable.prevPrice}
                    currPrice={vegetable.currPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <h2 className="mb-2 font-semibold px-5 lg:px-0">Top Rated</h2>
          <div className="flex p-5 lg:p-0">
            <div className="flex flex-col gap-3">
              {Hotveges.map((vegetable, i) => {
                return (
                  <MiniCard
                    key={i}
                    vegetable={vegetable}
                    img={vegetable.img}
                    name={vegetable.name}
                    prevPrice={vegetable.prevPrice}
                    currPrice={vegetable.currPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Most Bought */}
        <div>
          <h2 className="mb-2 font-semibold px-5 lg:px-0">Most Bought</h2>
          <div className="flex p-5 lg:p-0">
            <div className="flex flex-col gap-3">
              {Hotveges.map((vegetable, i) => {
                return (
                  <MiniCard
                    key={i}
                    vegetable={vegetable}
                    img={vegetable.img}
                    name={vegetable.name}
                    prevPrice={vegetable.prevPrice}
                    currPrice={vegetable.currPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:block hidden w-full h-72 mt-2 relative cursor-pointer rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-90"
            src="https://images.pexels.com/photos/7129160/pexels-photo-7129160.jpeg?auto=compress&cs=tinysrgb"
            alt=""
          />
          <div className="absolute text-slate-100 z-20 top-[40%] text-center">
            <p className="text-2xl font-semibold px-5">
              Get 50% Off! Hurry Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FeaturedProducts);
