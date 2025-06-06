import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { TbHexagonLetterOFilled } from "react-icons/tb";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 w-full h-24">
        {/* Logo */}
        <div className="text-white text-xl font-bold flex w-28 sm:ml-8 -ml-7">
          <img src="/S.svg" alt="logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none z-20 ml-auto"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links and Button */}
        <div className="flex items-start lg:items-center lg:px-8">
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row lg:items-start lg:space-x-8 font-primary absolute lg:static top-16 left-0 w-full lg:w-auto ${
              isMenuOpen ? 'border-t-[1px] border-t-gray-500' : 'border-t-0'
            } bg-gray-900 lg:bg-transparent lg:border-t-0 items-start text-left p-4 lg:p-0 transition-all duration-300 ease-in-out z-10`}
          >
            <Link to="/" className="text-white py-2 lg:py-0 hover:text-blue-400 transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-white py-2 lg:py-0 hover:text-blue-400 transition-colors">
              ABOUT ME
            </Link>
            <Link to="/projects" className="text-white py-2 lg:py-0 hover:text-blue-400 transition-colors">
              PROJECTS
            </Link>
            <Link to="/services" className="text-white py-2 lg:py-0 hover:text-blue-400 transition-colors">
              SERVICES
            </Link>
            <Link to="/contact" className="text-white py-2 lg:py-0 hover:text-blue-400 transition-colors">
              CONTACT
            </Link>
          </div>
          <div className="hidden lg:flex lg:ml-8">
            <button className="hover:bg-transparent hover:border-2 border-2 border-transparent hover:border-white bg-blue-500 rounded-full px-7 py-3 font-semibold text-white transition-all">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;