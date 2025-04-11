/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaBars, FaChevronDown, FaPhone, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close services dropdown when opening/closing mobile menu
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const handleServicesClick = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] pt-4 pb-2.5 px-4 lg:px-24 flex items-center justify-between shadow-2xl drop-shadow-2xl z-10">
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="" />
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <a
          href="#"
          className={`${
            activeLink === "Home" ? "font-bold" : ""
          } text-[#CFCFCF] hover:text-blue-400`}
          onClick={() => setActiveLink("Home")} // Set active link on click
        >
          Home
        </a>
        <a
          href="#"
          className={`${
            activeLink === "About" ? "font-bold" : ""
          } text-[#CFCFCF] hover:text-blue-400`}
          onClick={() => setActiveLink("About")}
        >
          About
        </a>
        <div className="relative">
          <a
            className="flex items-center text-[#CFCFCF] hover:text-blue-400 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Services
            <FaChevronDown className="ml-1.5 mt-1" size={13} />
          </a>
          {isDropdownOpen && (
            <div className="absolute w-[6rem] flex flex-col justify-start items-center bg-white text-black rounded-md shadow-lg mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Core refresh
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Staff augmentation
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                view All...
              </a>
            </div>
          )}
        </div>
        <a
          href="#"
          className={`${
            activeLink === "Contact" ? "font-bold" : ""
          } text-[#CFCFCF] hover:text-blue-400`}
          onClick={() => setActiveLink("Contact")}
        >
          Contact
        </a>
      </div>

      {/* Desktop Call Button */}
      <a
        href="tel:+2348184441404"
        className="hidden md:flex items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-5 py-2 lg:px-6 lg:py-2 border-2 border-blue-500 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out text-sm lg:text-base"
      >
        <FaPhone className="mr-2 rotate-90" size={12} />
        +234 818 444 1404
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#05071E] bg-opacity-95 backdrop-blur-sm shadow-xl z-50 flex flex-col items-center py-6 space-y-5">
          <a
            href="#"
            className={`${
              activeLink === "Home" ? "font-bold text-white" : "text-[#CFCFCF]"
            } hover:text-blue-400 text-lg`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={`${
              activeLink === "About" ? "font-bold text-white" : "text-[#CFCFCF]"
            } hover:text-blue-400 text-lg`}
            onClick={() => handleLinkClick("About")}
          >
            About
          </a>
          <div className="relative w-full text-center">
            <button
              className={`flex items-center justify-center w-full ${
                activeLink === "Services"
                  ? "font-bold text-white"
                  : "text-[#CFCFCF]"
              } hover:text-blue-400 cursor-pointer transition-colors duration-200 text-lg`}
              onClick={handleServicesClick}
              aria-haspopup="true"
              aria-expanded={isServicesDropdownOpen}
            >
              Services
              <FaChevronDown
                className={`ml-1.5 mt-1 transform transition-transform duration-200 ${
                  isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                size={13}
              />
            </button>
            {isServicesDropdownOpen && (
              <div className="w-full flex flex-col items-center bg-transparent text-white rounded-md mt-2 py-1 space-y-2">
                <a
                  href="#"
                  className="block px-4 py-1 text-base hover:text-blue-400 transition-colors duration-200"
                  onClick={() => handleLinkClick("Services")}
                >
                  Core refresh
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 text-base hover:text-blue-400 transition-colors duration-200"
                  onClick={() => handleLinkClick("Services")}
                >
                  Staff augmentation
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 text-base hover:text-blue-400 transition-colors duration-200"
                  onClick={() => handleLinkClick("Services")}
                >
                  View All...
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className={`${
              activeLink === "Contact"
                ? "font-bold text-white"
                : "text-[#CFCFCF]"
            } hover:text-blue-400 text-lg`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
          {/* Mobile Call Button */}
          <a
            href="tel:+2348184441404"
            className="flex mt-4 items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-2 border-2 border-blue-500 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black transition duration-300 ease-in-out text-base"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            <FaPhone className="mr-2 rotate-90" size={12} />
            +234 818 444 1404
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
