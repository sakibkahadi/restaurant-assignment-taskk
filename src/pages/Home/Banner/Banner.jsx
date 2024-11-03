import React from "react";
import vector from "../../../assets/banner/Vector.png";
import banner from "../../../assets/banner/banner-2.jfif";
import CustomButton from "../../../components/CustomButton";

const Banner = ({ children }) => {
  return (
    <div className="w-full">
      <div className="h-20 mb-20">{children}</div>

      {/* Banner */}
      <div className="mt-10 px-5 grid grid-cols-1 gap-5 md:grid-cols-2  relative">
        {/* Content div */}
        <div className="text-white z-10 relative space-y-3">
          <h1
            style={{
              background:
                "linear-gradient(90deg, rgba(189, 31, 23, 0.3) 0%, rgba(189, 31, 23, 0.4) 70%)",
            }}
            className="text-5xl md:mt-10 lg:text-[90px]  lg:w-[660px] bg- font-bebas "
          >
            TASTE THE AUTHENTIC SAUDI CUISINE
          </h1>
          <p className=" text-lg lg:text-[22px] font-light font-roboto">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <CustomButton buttonText="EXPLORE MENU" />
        </div>

        {/* Image div */}
        <div className="relative mb-20">
          {/* Vector */}
          <img
            className="h-[35px] w-[35px] absolute -top-3 right-1 lg:-right-5 lg:-top-7"
            src={vector}
            alt="vector"
            loading="lazy"
          />
          <img
            className="h-full lg:h-[450px]  transform scale-x-[-1]"
            src={banner}
            alt="banner"
            loading="lazy"
          />

          {/* Today Offer */}
          <div className="absolute right-6 bottom-5 lg:-right-7 lg:-bottom-0 h-[72px] w-[72px] bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="h-[64px] w-[64px] rounded-full flex items-center justify-center border border-dashed border-black">
              <span className="text-center font-roboto text-[#0a1425] font-bold">
                TODAY OFFER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
