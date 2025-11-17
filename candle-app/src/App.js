// HeroSection.jsx
import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4  fixed top-0 left-0 w-full z-50 ">
        <div className="flex justify-between items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 text-2xl">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer ">Shop</li>

            {/* Blog Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="">Blog</span>
              <ul className="absolute left-0 mt-2 w-48 bg-white border  shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px] ">Blog Grid</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Blog Category</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Blog Details</li>
              </ul>
            </li>

            {/* Page Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="">Page</span>
              <ul className="absolute left-0 mt-2 w-48 bg-white border  shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">About us</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Faqs</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Delivery</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Legal Notice</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[18px]">Secure payment</li>
              </ul>
            </li>

            <li className="cursor-pointer ">Contacts</li>
          </ul>
          {/* Logo */}
          <img
            src="https://demo811.leotheme.com/prestashop/vt_candlea_demo/img/logo-1731681595.jpg"
            alt="Candlea Logo"
            className="h-17 w-[160px]"
          />

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <FaSearch className="text-gray-700 text-[20px] cursor-pointer hover:text-blue-600" />
            <FaUser className="text-gray-700 text-[20px] cursor-pointer hover:text-blue-600" />
          <FaShoppingBag className="text-gray-700 text-[20px] cursor-pointer hover:text-blue-600" />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-4 bg-white border-t pt-4">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Shop</li>

            {/* Blog Dropdown Mobile */}
            <li className="cursor-pointer ">
              Blog
              <ul className="pl-4 mt-2 space-y-2 ">
                <li className="hover:text-blue-600">Blog Grid</li>
                <li className="hover:text-blue-600">Blog Category</li>
                <li className="hover:text-blue-600">Blog Details</li>
              </ul>
            </li>

            {/* Page Dropdown Mobile */}
            <li className="cursor-pointer  hover:text-blue-600">
              Page
              <ul className="pl-4 mt-6 space-y-2">
                <li className="hover:text-blue-600">About us</li>
                <li className="hover:text-blue-600">Faqs</li>
                <li className="hover:text-blue-600">Delivery</li>
                <li className="hover:text-blue-600">Legal Notice</li>
                <li className="hover:text-blue-600">Secure payment</li>
              </ul>
            </li>

            <li className="cursor-pointer hover:text-blue-600">Contacts</li>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 mt-4">
              <FaSearch className="text-gray-700 hover:text-blue-600" />
              <FaUser className="text-gray-700 hover:text-blue-600" />
              <FaShoppingBag className="text-gray-700 hover:text-blue-600" />
            </div>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
<div className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 mt-16 bg-gray-50">

  {/* Left Image */}
  <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
    <img
      src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_candlea_home1_banner_1.jpg?v=1728571624"
      alt="Candles Display"
      className="w-auto max-w-[800px] h-[700px] shadow-lg"
    />
  </div>

  {/* Center Text */}
  <div className="lg:w-1/3 px-6 px-[89px]">
    <h1 className="text-4xl text-[90px] mb-4 leading-tight italic">
      Traditional <em className="">handmade</em> candles
    </h1>

    <p className="text-gray-700 mb-6 text-[26px]">
      Candlea is accessibility ready multi-purpose website builder. Create beautiful websites for everyone.
    </p>

    <button className="bg-black text-white text-[20px] px-[28px] py-5 hover:bg-blue-700 transition">
      Shop Now →
    </button>
  </div>

  {/* Right Image */}
  <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
    <img
      src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_candlea_home1_banner_2.png?v=1728571624"
      alt="Candles Display 2"
      className="w-full max-w-[300px]"
    />
  </div>

</div>

    </div>
  );
};

export default HeroSection;
