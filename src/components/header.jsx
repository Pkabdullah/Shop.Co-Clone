"use client";
import React, { useState } from 'react';
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cart = useSelector((state) => state.product.cartItems);

  const handlePromoClose = () => setIsPromoVisible(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => {
    console.log('Mobile menu toggled:', !isMobileMenuOpen); // Debug log
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      {isPromoVisible && (
        <div className="flex relative justify-center items-center px-4 py-2 text-white bg-black">
          <div className="text-sm text-center">
            Sign up and get 20% off to your first order.{' '}
            <button className="font-medium underline hover:no-underline">
              Sign Up Now
            </button>
          </div>
          <button
            onClick={handlePromoClose}
            className="absolute right-4 transition-opacity hover:opacity-70"
          >
            <IoMdClose size={16} />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-3xl font-black text-black">SHOP.CO</h1>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden space-x-8 md:flex">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-700 transition-colors hover:text-black"
                >
                  <Link to="/shop">Shop</Link>
                  <IoChevronDown size={16} className="ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg">
                    <div className="py-2">
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Men's Clothing</Link>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Women's Clothing</Link>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accessories</Link>
                      <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shoes</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/" className="text-gray-700 transition-colors hover:text-black">On Sale</Link>
              <Link to="/" className="text-gray-700 transition-colors hover:text-black">New Arrivals</Link>
              <Link to="/" className="text-gray-700 transition-colors hover:text-black">Brands</Link>
            </nav>

            {/* Desktop Search */}
            <div className="hidden flex-1 mx-8 mt-4 max-w-lg md:block">
              <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" size={20} />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="py-2 pr-4 pl-10 w-full bg-[#f0f0f0] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 md:hidden hover:text-black">
                <IoSearchOutline size={20} />
              </button>

              <button className="relative text-gray-700 transition-colors hover:text-black">
                <Link to="/cart">
                  <FiShoppingCart className='text-2xl' />
                </Link>
                <span className="flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </button>

              <button className="text-gray-700 transition-colors hover:text-black">
                <MdOutlineAccountCircle className='text-2xl' />
              </button>

              {/* Hamburger Menu Button */}
              <button 
                onClick={toggleMobileMenu} 
                className="ml-4 text-gray-700 md:hidden hover:text-black focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4 md:hidden">
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-1/2 text-gray-400 transform -translate-y-1/2" size={20} />
            <input
              type="text"
              placeholder="Search for products..."
              className="py-2 pr-4 pl-10 w-full bg-gray-50 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="px-4 py-4 space-y-2 bg-white border-t border-gray-200 shadow-md md:hidden">
            <Link 
              to="/shop" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block py-2 text-gray-800 transition-colors hover:text-black"
            >
              Shop
            </Link>
            <Link 
              to="/on-sale" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block py-2 text-gray-800 transition-colors hover:text-black"
            >
              On Sale
            </Link>
            <Link 
              to="/new" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block py-2 text-gray-800 transition-colors hover:text-black"
            >
              New Arrivals
            </Link>
            <Link 
              to="/brands" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block py-2 text-gray-800 transition-colors hover:text-black"
            >
              Brands
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
