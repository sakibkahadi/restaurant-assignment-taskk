import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
  return (
    <div className="  ">
      <div className="w-full bg-orange-pattern">
        <div className="relative  max-w-5xl mx-auto">
          <Banner>
            <Navbar />
          </Banner>
        </div>
      </div>

      <div className=" px-5 max-w-5xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
