import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` px-5 w-full max-w-5xl mx-auto sticky  top-0 z-50 py-4  transition-all duration-300 ${
        isScrolled
          ? "bg-red-600  bg-opacity-80 backdrop-blur-md"
          : "bg-transparent bg-opacity-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-14">
          {/* Logo */}
          <img className="w-52 h-[37px]" loading="lazy" src={logo} alt="logo" />

          {/* Desktop Menu */}
          <div className="hidden font-medium lg:flex space-x-6 font-raleway text-white text-sm">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Clients</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <CustomButton buttonText="BOOK A TABLE" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden relative">
          <div className="absolute rounded-lg bg-slate-600 p-5 right-5">
            <div className="flex flex-col text-white items-center space-y-4 py-4">
              <NavLink>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Portfolio</NavLink>
              <NavLink>Clients</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Contact</NavLink>
              <div className="divider"></div>
              <CustomButton buttonText="BOOK A TABLE" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
