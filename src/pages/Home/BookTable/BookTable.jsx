import React from "react";
import CustomSubHeading from "../../../components/CustomSubHeading";
import CustomHeading from "../../../components/CustomHeading";
import Form from "./Form";

const BookTable = () => {
  return (
    <div className="  max-w-5xl mx-auto  w-full">
      <div className="  "></div>
      <div className="! h-[750px] text-neutral-content text-center">
        <div className=" md:w-2/3 lg:w-1/2 h-full pt-5 lg:pt-20">
          {/* description section */}
          <div className="text-white  text-start space-y-2">
            <CustomSubHeading subHeading="Book Now" />
            <CustomHeading heading="BOOK YOUR TABLE" />
            <p className="font-roboto text-base font-light">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          {/* form section */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BookTable;
