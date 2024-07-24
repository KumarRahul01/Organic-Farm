import React from "react";
import SectionTitle from "./SectionTitle";
import './Header/Header.css';

const Newsletter = () => {
  return (
    <div className="w-full bg-[#EDF2EE] mt-14 lg:mt-20">
      <div className="w-10/12 mx-auto py-5 lg:p-10">
        <SectionTitle sectionName={"Subscribe Our Newsletter"} />
        <p className="text-center lg:-mt-5 hidden lg:block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet.
        </p>
        <p className="text-center lg:-mt-5 lg:hidden block">
          Lorem ipsum dolor sit, amet consectetur.
        </p>

        {/* form */}
        <form className="w-full my-10">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full lg:w-1/2 p-2 rounded-md focus:border-none"
              name="subscribe"
              id="subscribe"
            />
            <button className="greenBgColor text-white p-2 rounded-md">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Newsletter);
