import React from "react";
import SectionTitle from "./SectionTitle";
import { featuredVegetables } from "../assets/featuredVeges";
import Cards from "./Featured Products/Cards";

const NewProducts = () => {
  return (
    <div className="md:w-10/12 mx-auto w-full p-5 md:p-0 md:mt-28">
      <SectionTitle sectionName={"Newest Products"} />

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
    </div>
  );
};

export default NewProducts;
