import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full  absolute  z-50  py-4   ">
      <div className=" flex justify-between items-center  px-5">
        <div className="flex items-center gap-14">
          {/* <h1 className="text-2xl font-[400px] font-poppins text-white">
            Restaurant{" "}
          </h1> */}
          {/* logo */}
          <img className="w-52 h-[37px]" loading="lazy" src={logo} alt="logo" />

          {/* Menu for lg */}
          <div className="hidden  font-medium  lg:flex space-x-6 font-raleway text-white text-sm">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Clients</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>

        {/* Button for lg*/}
        <div className="hidden lg:block">
          <CustomButton buttonText="BOOK A TABLE" />
        </div>

        {/* menu for tablet and mobile*/}
        <div className="lg:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes color="white" size={20} />
            ) : (
              <FaBars color="white" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* dropdown*/}
      {isMenuOpen && (
        <div className="lg:hidden   relative  ">
          <div className="absolute rounded-lg bg-slate-600 p-5 right-5  ">
            <div className="flex flex-col  text-white items-center space-y-4 py-4">
              <NavLink>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Portfolio</NavLink>
              <NavLink>Clients</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Contact</NavLink>
              <div className="divider "></div>
              <CustomButton buttonText="BOOK A TABLE" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
