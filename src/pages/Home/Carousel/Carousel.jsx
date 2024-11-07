import React, { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ResponsiveCarousel from "./ResponsiveCarousel.jsx";
import CustomHeading from "../../../components/CustomHeading.jsx";
import CustomSubHeading from "../../../components/CustomSubHeading.jsx";

const Carousel = ({ food }) => {
  const carouselRef = useRef();

  return (
    <div className=" -mt-10 md:mt-10">
      {/* Heading */}
      <div className="mb-10  pt-10 space-y-3">
        <CustomSubHeading subHeading="Crispy, Every Bite Taste" />
        <div className="flex justify-between items-center text-black">
          <CustomHeading heading="POPULAR FOOD ITEMS" />
          {/* buttons for slide */}
          <div className="hidden md:flex gap-5 items-center">
            <p
              onClick={() => carouselRef.current.prev()}
              className="flex w-fit border p-2 rounded-full shadow-lg cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft size={20} />
            </p>
            <p
              onClick={() => carouselRef.current.next()}
              className="flex border w-fit p-2 rounded-full shadow-lg cursor-pointer"
            >
              <MdOutlineKeyboardArrowRight color="red" size={20} />
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <ResponsiveCarousel food={food} ref={carouselRef} />
      <div className="flex md:hidden  gap-5 items-center justify-center">
        <p
          onClick={() => carouselRef.current.prev()}
          className="flex border w-fit p-2 rounded-full shadow-lg cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </p>
        <p
          onClick={() => carouselRef.current.next()}
          className="flex border w-fit p-2 !text-white rounded-full shadow-lg cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight color="red" size={20} />
        </p>
      </div>
    </div>
  );
};

export default Carousel;
