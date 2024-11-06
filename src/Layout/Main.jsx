import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Banner from "../pages/Home/Banner/Banner";
import salad from "../assets/about/salad.png";
import About from "../pages/Home/About/About";
import Carousel from "../pages/Home/Carousel/Carousel";
import foods from "../assets/foods/top-view.png";
import BookTable from "../pages/Home/BookTable/BookTable";
import bookTable from "../assets/booking/booking-bg.jpeg";
const Main = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="max-w-7xl mx-auto border relative">
      {/* Salad Image -1 */}
      <img
        src={salad}
        className="hidden md:hidden xl:block absolute h-52 right-0 top-[960px]"
        alt="salad"
      />
      {/* salad image -2 */}
      <img
        src={foods}
        className="hidden md:hidden xl:block absolute h-52 left-0 top-[1460px]"
        alt="food"
      />
      {/* navbar */}
      <Navbar /> {/* banner-section */}
      <div className="w-full bg-orange-pattern">
        <div className="max-w-5xl mx-auto">
          <Banner />
        </div>
      </div>
      {/* about-section */}
      <div className="px-5 max-w-5xl mb-10 mx-auto relative">
        <About />
      </div>
      {/* popular food item section */}
      <div className=" max-w-7xl bg-[#fbf7f2] mx-auto py-10 ">
        <div className="px-5  max-w-5xl mx-auto ">
          <Carousel food={food} />
        </div>
      </div>
      {/* book table section */}
      <div
        className="px-5 max-w-7xl mb-10 mx-auto hero "
        style={{
          backgroundImage: `url(${bookTable})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <BookTable />
      </div>
    </div>
  );
};

export default Main;
