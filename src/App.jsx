import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/Featured Products/FeaturedProducts";
import Offers from "./components/Offers/Offers";
import NewProducts from "./components/NewProducts";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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

      {/* NewProducts */}
      <section>
        <NewProducts />
      </section>

      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>

      {/* NewsLetter */}
      <section>
        <Newsletter />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
