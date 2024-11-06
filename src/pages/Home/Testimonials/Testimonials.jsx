import React, { useRef } from "react";
import CustomSubHeading from "../../../components/CustomSubHeading";
import CustomHeading from "../../../components/CustomHeading";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  const testimonialsRef = useRef();
  return (
    <div>
      {/* Heading */}
      <div className="mb-10 pt-10 space-y-3">
        <CustomSubHeading subHeading="Crispy, Every Bite Taste" />
        <div className="flex justify-between items-center text-black ">
          <CustomHeading heading="WHAT SOME OF MY CUSTOMERS SAY" />
          {/* buttons for slide */}
          <div className="hidden md:flex gap-5 items-center">
            <p
              onClick={() => testimonialsRef.current.prev()}
              className="flex w-fit border p-2 rounded-full shadow-lg cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft size={20} />
            </p>
            <p
              onClick={() => testimonialsRef.current.next()}
              className="flex border w-fit p-2 rounded-full shadow-lg cursor-pointer"
            >
              <MdOutlineKeyboardArrowRight color="red" size={20} />
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <TestimonialsCarousel ref={testimonialsRef} />
      <div className="flex md:hidden  gap-5 items-center justify-center">
        <p
          onClick={() => testimonialsRef.current.prev()}
          className="flex border w-fit p-2 rounded-full shadow-lg cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </p>
        <p
          onClick={() => testimonialsRef.current.next()}
          className="flex border w-fit p-2 !text-white rounded-full shadow-lg cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight color="red" size={20} />
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
