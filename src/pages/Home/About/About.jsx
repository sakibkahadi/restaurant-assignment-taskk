import React from "react";
import CustomDescription from "../../../components/CustomDescription";
import Tab from "./Tab";
import about from "../../../assets/about/about.png";

import diningIcon from "../../../assets/about/absolute-dining.png";
import fastDeliveryIcon from "../../../assets/about/fast-delivery.png";
import pickupDeliveryIcon from "../../../assets/about/pickup-deliver.png";
const About = () => {
  return (
    <div className=" -mt-10 md:mt-10  ">
      {/* div1 image and tabs sections */}
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 ">
        {/* image part */}
        <div className="">
          <img
            className="w-full md:h-full lg:h-[360px]"
            src={about}
            alt="about"
          />
        </div>
        {/* tabs part */}
        <Tab />
      </div>
      {/* div2 small details section */}
      <div className="grid mt-10  lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {/* small details 1 */}
        <CustomDescription
          image={fastDeliveryIcon}
          heading="FAST DELIVERY"
          subHeading="within 30 minutes"
        />
        {/* small details 2 */}
        <CustomDescription
          image={diningIcon}
          heading="ABSOLUTE DINNING"
          subHeading="Best buffet restaurant"
        />
        {/* small details 3 */}
        <CustomDescription
          image={pickupDeliveryIcon}
          heading="PICKUP DELIVERY"
          subHeading="Grab your food order"
        />
      </div>
    </div>
  );
};

export default About;
