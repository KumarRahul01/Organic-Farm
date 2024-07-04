import React from "react";

const SaleOffer = ({img, alt}) => {
  return (
    <div className="md:w-[350px] w-[300px] md:h-[400px] h-[300px] overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-md"
        src={img}
        alt={alt}
      />
    </div>
  );
};

export default SaleOffer;
