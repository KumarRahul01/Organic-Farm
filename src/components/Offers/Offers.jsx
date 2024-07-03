import React from "react";
import bigOffers from "../../assets/bigOffers.png";

const Offers = () => {
  return (
    <div className="w-10/12 mx-auto text-center">
      <h2>Offers</h2>
      <div className="w-full">
        <img className="w-full" src={bigOffers} alt="" />
      </div>
    </div>
  );
};

export default Offers;
