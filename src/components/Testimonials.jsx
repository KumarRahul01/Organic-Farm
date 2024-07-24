import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#EDF2EE] w-10/12 mx-auto lg:my-10 py-10 lg:py-20 relative lg:block hidden">
      <SectionTitle sectionName={"Client Testimonial"} />
        <div className="lg:flex justify-around hidden">
          {/* <Slider {...settings}>
            <div className="flex flex-col gap-10 lg:mb-10 bg-red-900">
              <div className="lg:w-[350px] lg:h-[200px] h-[320px] bg-white rounded-md m-5 lg:m-0 relative">
                <blockquote className="p-5">
                  This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </blockquote>

                <div className="absolute flex left-5">
                  <div className="w-10 h-10 overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://img.freepik.com/free-photo/pretty-girl-with-long-hair-posing_155003-7882.jpg?uid=R117734300&ga=GA1.1.776574482.1719942477&semt=ais_user"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col ml-5">
                    <h2 className="font-semibold">Jelia Moose</h2>
                    <p className="text-sm font-light">Customer</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[350px] lg:h-[200px] h-[320px] bg-white rounded-md m-5 lg:m-0 relative">
                <blockquote className="p-5">
                  This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </blockquote>

                <div className="absolute flex left-5">
                  <div className="w-10 h-10 overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://img.freepik.com/free-photo/pretty-girl-with-long-hair-posing_155003-7882.jpg?uid=R117734300&ga=GA1.1.776574482.1719942477&semt=ais_user"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col ml-5">
                    <h2 className="font-semibold">Jelia Moose</h2>
                    <p className="text-sm font-light">Customer</p>
                  </div>
                </div>
              </div>
            </div>
            </Slider > */}
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
      </div>
    </div>
  );
};

export default React.memo(Testimonials);
