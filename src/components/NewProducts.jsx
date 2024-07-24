import React from "react";
import SectionTitle from "./SectionTitle";
import { featuredVegetables } from "../assets/featuredVeges";
import Cards from "./Featured Products/Cards";

const NewProducts = () => {
  return (
    <div className="lg:w-10/12 mx-auto w-full p-5 lg:p-0 lg:mt-28">
      <SectionTitle sectionName={"Newest Products"} />

      {/* Horizontal cards */}
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:justify-start justify-center lg:items-center lg:gap-5 gap-10 lg:mb-20">
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

export default React.memo(NewProducts);
