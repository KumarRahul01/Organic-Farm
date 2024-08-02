import React from "react";
import MiniCard from "../Featured Products/MiniCard";
import { Hotveges } from "../../assets/HotVeges";


const HotOffers = () => {
  return (
    <div className="w-full">
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

export default HotOffers;
