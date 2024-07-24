import React from "react";

const SectionTitle = ({sectionName}) => {
  return (
    <h1 className="text-center font-semibold text-2xl lg:text-3xl my-5 lg:mb-10">
      {sectionName}
      <div className="flex w-full justify-center items-center pb-5 lg:pb-0">
        <hr className="h-[3px] rounded w-4/12 lg:w-1/12 mt-2 bg-green-500" />
      </div>
    </h1>
  );
};

export default SectionTitle;
