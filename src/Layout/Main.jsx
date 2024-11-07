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
import leftImage from "../assets/review/left.png";
import rightImage from "../assets/review/right.png";
import Testimonials from "../pages/Home/Testimonials/Testimonials";
import footer from "../assets/footer/restaurant-interior.jfif";
import Footer from "../pages/Home/Footer/Footer";
const Main = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="max-w-7xl mx-auto  relative">
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
      {/* left-side salad image  */}
      <img
        src={leftImage}
        className="hidden md:hidden xl:block absolute h-52 left-0 top-[2660px]"
        alt="food"
      />
      {/* right-side salad image */}
      <img
        src={rightImage}
        className="hidden md:hidden xl:block absolute h-80 right-0 top-[2900px]"
        alt="food"
      />

      {/* navbar  section*/}
      <div className="max-w-5xl mx-auto  ">
        <Navbar />
      </div>
      {/* banner-section */}
      <div className="w-full bg-orange-pattern">
        <div className="max-w-5xl mx-auto">
          <Banner />
        </div>
      </div>
      {/* about-section */}
      <div className="px-4 max-w-5xl  mb-20 mx-auto relative">
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
        className="px-5 max-w-7xl mb-10 mx-auto hero bg-cover  lg:bg-[length:112%] bg-top "
        style={{
          backgroundImage: `url(${bookTable})`,
          backgroundRepeat: "no-repeat",

          height: "100%",
        }}
      >
        <BookTable />
      </div>
      {/* testimonials */}
      <div className=" max-w-7xl  mx-auto py-10 mb-10 ">
        <div className="px-5  max-w-5xl mx-auto ">
          <Testimonials />
        </div>
      </div>
      {/* footer */}
      <div
        className="relative max-w-7xl  mx-auto hero bg-cover bg-center"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        {/*  */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

        {/* footer component with clear text */}
        <div className="relative z-10  max-w-5xl px-5 mx-auto  w-full  ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
