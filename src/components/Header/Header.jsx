import React, { useContext, useState } from "react";
import "./Header.css";
import { ImLeaf } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../context/ShoppingContext";


const Header = () => {

  const {quantity} = useContext(ShoppingContext)  

  // const menu = ["Home", "Products", "Shop", "Blog", "About Us", "Contact Us"];
  const menu = [{
    label: "Home",
    path: "/Organic-Farm/"
  },{
    label: "Products",
    path: "/Organic-Farm/products"
  },{
    label: "Shop",
    path: "/Organic-Farm/shop"
  }, {
    label: "Blog",
    path: "/Organic-Farm/blog"
  }, {
    label: "About Us",
    path: "/Organic-Farm/about"
  }, {
    label: "Contact Us",
    path: "/Organic-Farm/contact"
  }]

  const [mobMenu, setMobMenu] = useState(false);

  return (
    <div>
      {/* Small Navbar */}
      <div className="lg:w-10/12 hidden mx-auto lg:flex justify-between items-center py-1">
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
      <div className="lg:w-10/12 w-full mx-auto flex justify-between items-center p-5 lg:p-0 lg:mb-3">
        <div className="w-full flex justify-between items-center">
          {/* logo */}
          <Link to={"/Organic-Farm/"} className="flex items-center space-x-2">
            <ImLeaf size={"1.8rem"} className="greenTextColor" />{" "}
            <span className="lg:text-xl text-xl block font-medium sm:mr-5">
              O
              <span className="text-base lg:text-lg font-medium ">
                rganic Farm
              </span>{" "}
            </span>
          </Link>

          {/* SearchBox */}
          <div className="lg:w-[450px] w-fit sm:w-[400px] hidden sm:flex items-center space-x-2 overflow-hidden relative border-y border-l rounded">
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
          <Link to={"/Organic-Farm/cart"} className="block sm:ml-5">
            <button className="flex items-center rounded-full mr-2">
              <HiOutlineShoppingBag size={"1.5rem"} />
              <span className="mt-1 relative">Cart <div className="absolute -top-[8px] -right-3 px-[4px] text-xs text-white rounded-full bg-red-500">{quantity}</div> </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-gray-800 text-white py-3 font-light">
        {/* Nabvar in Big Devices */}
        <div className="w-10/12 mx-auto lg:flex hidden justify-between items-center">
          <ul className="flex">
            {menu.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path} className="py-2 px-4">
                    {item.label}
                  </Link>
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
        <div className="lg:hidden flex flex-row-reverse justify-between items-center relative mx-5">
          <div onClick={()=> setMobMenu(!mobMenu)}>
            {
              !mobMenu ? <><IoIosMenu size={"1.8rem"} /></> : <><RxCross2 size={"1.8rem"} /></>
            }
          </div>
          <div className="flex items-center space-x-2">
            <FiPhoneCall />
            <span>+91 1234567890</span>
          </div>

          {mobMenu && (
            <div className={`absolute w-full flex flex-col bg-gray-800 text-white top-12 z-20 ${mobMenu ? "translate-x-0": "-left-96"} transition-all duration-300`}>
              <ul className="text-center p-2">
                {menu.map((item, i) => {
                  return (
                    <li key={i} className="py-3">
                      <a href={item.path}>{item.label}</a>
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

export default React.memo(Header);
