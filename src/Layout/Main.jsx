import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Banner from "../pages/Home/Banner/Banner";
import salad from "../assets/about/salad.png";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto border relative">
      {/* Salad Image */}
      <img
        src={salad}
        className="hidden md:hidden lg:block absolute h-52 right-1 top-[960px]"
        alt=""
      />
      <Navbar />{" "}
      <div className="w-full bg-orange-pattern">
        <div className="max-w-5xl mx-auto">
          <Banner />
        </div>
      </div>
      <div className="px-5 max-w-5xl mx-auto relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
