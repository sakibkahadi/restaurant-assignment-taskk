import React from "react";
import CustomHeading from "../../../components/CustomHeading";
import FooterCard from "./FooterCard";
import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" my-4 md:my-20 px-5">
      <div className="text-white pt-2 md:pt-10   w-full">
        {/* heading */}
        <div className="text-center">
          <CustomHeading heading="WE READY TO HAVE YOU THE BEST DINING EXPERIENCES" />
        </div>
        {/* card */}
        <div className=" pb-5 ">
          <FooterCard />
        </div>
        {/* footer social */}
        <div className="mt-5">
          {/* icon */}
          <div className=" flex gap-5 justify-center items-center">
            {/* fb */}
            <span className="border flex justify-center items-center w-fit p-4 rounded-full">
              <FaFacebook className="text-white " />
            </span>
            {/* twitter */}
            <span className="border flex justify-center items-center w-fit p-4 rounded-full">
              <FaXTwitter className="text-black size-[13px] border bg-white  " />
            </span>
            {/* instagram */}
            <span className="border flex justify-center items-center w-fit p-4 rounded-full">
              <FaInstagramSquare className="text-white " />
            </span>
            {/* Linkedin */}
            <span className="border flex justify-center items-center w-fit p-4 rounded-full">
              <FaLinkedin className="text-white " />
            </span>
          </div>
          <footer className="footer footer-center text-white  p-4">
            <aside>
              <p>© {new Date().getFullYear()} - All Rights Reserved</p>
            </aside>
          </footer>
          {/* rights */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
