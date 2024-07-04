import React from "react";

const SectionTitle = ({sectionName}) => {
  return (
    <h1 className="text-center font-semibold text-2xl md:text-3xl mb-5 md:mb-10">
      {sectionName}
      <div className="flex w-full justify-center items-center">
        <hr className="h-[3px] rounded w-4/12 md:w-1/12 mt-2 bg-green-500" />
      </div>
    </h1>
  );
};

export default SectionTitle;
