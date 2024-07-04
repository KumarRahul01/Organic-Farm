import React from "react";
import Cards from "./Cards";
import MiniCard from "./MiniCard";
import { featuredVegetables } from "../../assets/featuredVeges.js";
import { Hotveges } from "../../assets/HotVeges";
import img from "../../assets/offer1.png";
import SectionTitle from "../SectionTitle.jsx";

const FeaturedProducts = () => {
  return (
    <div className="md:w-10/12 mx-auto w-full p-5 md:p-0 md:mt-28">
      <SectionTitle sectionName={"Featured Products"} />

      {/* Horizontal cards */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-5 gap-10 mb-10 md:mb-20">
        {featuredVegetables.map((vegetable, i) => {
          return (
            <Cards
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

      {/* Vertical Cards */}
      <div className="flex md:gap-5 overflow-x-auto overflow-y-hidden md:mb-20">
        {/* Hot Deals */}
        <div>
          <h2 className="mb-2 font-semibold px-5 md:px-0">Hot Deals</h2>
          <div className="flex p-5 md:p-0">
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
          <h2 className="mb-2 font-semibold px-5 md:px-0">Best Seller</h2>
          <div className="flex p-5 md:p-0">
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
          <h2 className="mb-2 font-semibold px-5 md:px-0">Top Rated</h2>
          <div className="flex p-5 md:p-0">
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
          <h2 className="mb-2 font-semibold px-5 md:px-0">Most Bought</h2>
          <div className="flex p-5 md:p-0">
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

        <div className="md:block hidden w-full h-72 mt-2 relative cursor-pointer rounded-md overflow-hidden">
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

export default FeaturedProducts;
