import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/Featured Products/FeaturedProducts";
import Offers from "./components/Offers/Offers";

const App = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative">
        <Hero />
      </section>

      {/* Featured Posts */}
      <section>
        <FeaturedProducts />
      </section>

      {/* Offers */}
      <section>
        <Offers />
      </section>
    </div>
  );
};

export default App;
