import React, { useContext } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProducts from "../Featured Products/FeaturedProducts";
import Offers from "../Offers/Offers";
import NewProducts from "../NewProducts";
import Testimonials from "../Testimonials";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { ShoppingContext } from "../../context/ShoppingContext";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const { quantity } = useContext(ShoppingContext);


  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="">
        <Hero />
      </section>

      {/* Featured Posts */}
      <section className="relative">
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

export default Home;
