import React from "react";
import SectionTitle from "../SectionTitle";
import { offers } from "../../assets/offerImages";
import SaleOffer from "../SaleOffer";

const Offers = () => {
  return (
    <div className="w-10/12 mx-auto mb-10">
      <SectionTitle sectionName={"Best Offers"} />
      <div className="flex md:flex-row flex-col justify-between items-center gap-5 px-4 md:p-0">
        {/* Sale 1 */}
        <SaleOffer img={offers.sale1} alt={"sale1"} />

        {/* sale 2 */}
        <SaleOffer img={offers.sale2} alt={"sale2"} />

        {/* Sale3 */}
        <SaleOffer img={offers.sale3} alt={"sale3"} />

        {/* Sale 4 */}
        <SaleOffer img={offers.sale2} alt={"sale4"} />
      </div>
    </div>
  );
};

export default Offers;
