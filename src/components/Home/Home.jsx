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
        {/* {quantity > 0 && (
          <>
            <div className="hidden lg:block absolute top-20 right-10 lg:top-0 lg:right-[8rem] mx-auto">
              <button className="flex items-center gap-2 w-[150px] bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mb-5">
                <h3>View Cart</h3>
                <FaCheckCircle size={"1.25rem"} />
              </button>
            </div>
          </>
        )} */}
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
