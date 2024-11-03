import React from "react";

const CustomButton = ({ buttonText }) => {
  return (
    <button className="font-roboto px-6 font-bold rounded-none  bg-[#febf00] text-[#0a1425] py-4">
      {buttonText}
    </button>
  );
};

export default CustomButton;
