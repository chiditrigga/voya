import React, { useState } from 'react';
import { FaSearch, FaHome, FaWallet, FaListAlt, FaGift, FaBell, FaShoppingCart, FaPlus } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full">
      <div className="w-full px-3 xl:px-6 py-2 flex justify-between items-center">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 font-bold text-2xl">Go</div>
          <div className="relative hidden sm:flex">
            <FaSearch className="absolute top-2 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
            />
          </div>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex lg:space-x-3 xl:space-x-7 items-center">
          <a href="#" className="  items-center text-gray-700 hover:text-blue-600">
            <FaHome className=" mx-auto" />
            Home
          </a>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600">
            <FaWallet className="mx-auto" />
            Wallet
          </a>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600 font-semibold">
            <FaListAlt className="mx-auto" />
            Plan a trip
          </a>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600">
            <FaGift className="mx-auto" />
            Commission for life
          </a>
          <button className="bg-blue-500 text-white px-2 xl:px-4 py-1 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600">
            <FaBell className="mx-auto" />
            Notification
          </a>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600">
            <FaShoppingCart className="mx-auto" />
            Carts
          </a>
          <a href="#" className=" items-center text-gray-700 hover:text-blue-600">
            <FaPlus className="mx-auto" />
            Create
          </a>
          <div className="flex items-center space-x-1">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="rounded-full w-8 h-8"
            />
            <IoMdArrowDropdown className="text-gray-700" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <HiMenu className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-2">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaHome className="mr-1" />
              Home
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaWallet className="mr-1" />
              Wallet
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
              <FaListAlt className="mr-1" />
              Plan a trip
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaGift className="mr-1" />
              Commission for life
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaBell className="mr-1" />
              Notification
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaShoppingCart className="mr-1" />
              Carts
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <FaPlus className="mr-1" />
              Create
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
