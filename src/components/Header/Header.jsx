import React, { useState } from "react";
import "./Header.css";
import { ImLeaf } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const menu = ["Home", "Products", "Shop", "Blog", "About Us", "Contact Us"];

  const [mobMenu, setMobMenu] = useState(false);

  return (
    <div>
      {/* Small Navbar */}
      <div className="md:w-10/12 hidden mx-auto md:flex justify-between items-center py-1">
        <p className="text-xs font-light">Store Location: Lincoln- 344, Noida, UP</p>
        <div className="flex space-x-10">
          <select
            name="currency"
            id="currency"
            className="rounded px-1 text-center bg-transparent border-none"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
          <div className="flex space-x-2">
            <button>Sign In</button>
            <div>/</div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Medium Navbar */}
      <div className="md:w-10/12 w-full mx-auto flex justify-between items-center p-5 md:p-0 md:mb-3">
        <div className="w-full flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <ImLeaf size={"1.8rem"} className="greenTextColor mr-2 sm:mr-0" />{" "}
            <span className="md:text-xl sm:text-base hidden sm:block font-medium sm:mr-5">
              O
              <span className="sm:text-base md:text-lg font-medium ">
                rganic Farm
              </span>{" "}
            </span>
          </div>

          {/* SearchBox */}
          <div className="md:w-[450px] w-[400px] flex items-center space-x-2 overflow-hidden relative border-y border-l rounded">
            <div className="pl-2">
              <CiSearch size={"1.5rem"} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border-none py-2 focus:outline-none w-9/12"
            />
            <button className="greenBgColor text-white p-2 rounded-r absolute right-0">
              Search
            </button>
          </div>

          {/* Cart */}
          <div className="hidden sm:block sm:ml-5">
            <button className="flex items-center rounded-full">
              <HiOutlineShoppingBag size={"1.5rem"} />
              <span className="mt-1">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-gray-800 text-white py-3 font-light">
        {/* Nabvar in Big Devices */}
        <div className="w-10/12 mx-auto md:flex hidden justify-between items-center">
          <ul className="flex">
            {menu.map((item, i) => {
              return (
                <li key={i}>
                  <a href="#" className="py-2 px-4">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="lg:flex items-center space-x-2 hidden">
            <FiPhoneCall />
            <span>+91 1234567890</span>
          </div>
        </div>

        {/* Navbar in small devices */}
        <div className="md:hidden flex flex-row-reverse justify-between items-center relative mx-5">
          <div onClick={()=> setMobMenu(!mobMenu)}>
            <IoIosMenu size={"1.8rem"} />
          </div>
          <div className="flex items-center space-x-2">
            <FiPhoneCall />
            <span>+91 1234567890</span>
          </div>

          {mobMenu && (
            <div className="absolute w-full flex flex-col bg-gray-800 text-white top-12">
              <ul className="text-center p-2">
                {menu.map((item, i) => {
                  return (
                    <li key={i} className="py-3">
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
