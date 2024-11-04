import React from "react";

const CustomDescription = ({ image, heading, subHeading }) => {
  return (
    <div>
      <div className="flex gap-5 space-y-4 items-center ">
        {/* image */}
        <div className=" w-20 h-20  rounded-full flex items-center  justify-center shadow ">
          <img src={image} alt="icon" />
        </div>
        <div className="text-[#0a1425]">
          <h1 className=" font-normal text-3xl font-bebas">{heading}</h1>
          <p className="font-light text-lg">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomDescription;
