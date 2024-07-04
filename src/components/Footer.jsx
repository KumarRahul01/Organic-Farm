import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:w-10/12 mx-auto flex flex-col gap-20 md:flex-row justify-between items-center text-white py-10">
        <div className="flex flex-col w-3/12">
          <h2 className="">About Orgainc Farm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            neque.
          </p>
        </div>
        <div className="flex flex-col w-3/12">
          <h2 className="mb-10">My Account</h2>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col w-3/12">
          <h2 className="mb-10">Helps</h2>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col w-3/12">
          <h2 className="mb-10">Proxy</h2>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col w-3/12">Download our Mobile App</div>
      </div>
    </div>
  );
};

export default Footer;
