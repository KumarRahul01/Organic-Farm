import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="bg-[#EDF2EE] w-10/12 mx-auto md:my-10 py-10 md:py-20 relative">
      <div className="hidden w-full flex items-center justify-around">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
      <SectionTitle sectionName={"Client Testimonial"} />
      <div className="md:w-full md:flex justify-around mt-10 md:mt-0">
        <div className="">
          <TestimonialCard />
        </div>
        <div className="hidden md:block">
          <TestimonialCard />
        </div>
        <div className="hidden md:block">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
