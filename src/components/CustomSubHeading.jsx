import React from "react";

const CustomSubHeading = ({ subHeading }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-red-500 w-2 h-2 "></div>
      <div className="font-roboto font-medium text-sm lg:text-xl text-[#bd1f17]">
        {subHeading}
      </div>
    </div>
  );
};

export default CustomSubHeading;
