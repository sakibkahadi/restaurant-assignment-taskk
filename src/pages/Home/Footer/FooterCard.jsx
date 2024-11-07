import React from "react";
import clock from "../../../assets/footer/clock.png";
import call from "../../../assets/footer/call.png";
import message from "../../../assets/footer/message.png";
import location from "../../../assets/footer/location.png";
const FooterCard = () => {
  return (
    <div className="mt-7 w-full grid grid-cols-1  md:grid-cols-3 gap-6 lg:gap-12 lg:grid-cols-4">
      {/* opening hour */}
      <div className=" text-center space-y-3 ">
        <div className="flex items-center  w-full justify-center">
          <img className="" src={clock} alt="clock" />
        </div>
        <h1 className="font-bebas text-2xl">OPENING HOUR</h1>
        <div className="flex flex-col roboto font-normal text-sm  ">
          <h4>Monday-Sunday</h4>
          <h1>9:00 AM to 11.30 PM</h1>
        </div>
      </div>
      {/* Let's talk */}
      <div className=" text-center space-y-3 ">
        <div className="flex items-center w-full justify-center">
          <img className="" src={call} alt="call" />
        </div>
        <h1 className="font-bebas text-2xl">LET"S TALK</h1>
        <div className="flex flex-col roboto font-normal text-sm  ">
          <h4>Phone: 1-800-222-4545</h4>
          <h1>Fax: 1-800-222-4545</h1>
        </div>
      </div>
      {/* book a table */}
      <div className=" text-center space-y-3 ">
        <div className="flex items-center w-full justify-center">
          <img className="" src={message} alt="message" />
        </div>
        <h1 className="font-bebas text-2xl">LET"S TALK</h1>
        <div className="flex flex-col roboto font-normal text-sm  ">
          <h4>Email: demo@website.com</h4>
          <h1>Support: support@website.com</h1>
        </div>
      </div>

      {/* location */}
      <div className=" text-center space-y-3 ">
        <div className="flex items-center w-full justify-center">
          <img className="" src={location} alt="location" />
        </div>
        <h1 className="font-bebas text-2xl">OUR ADDRESS</h1>
        <div className="flex flex-col roboto font-normal text-sm ">
          <h4>123 Stree New York City, United </h4>
          <h1>States of America</h1>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
