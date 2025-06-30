import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct

function Header() {
  return (
    <header className=" bg-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-30 w-auto" />
        </div>

        {/* Centered NavLinks */}
        <nav className="flex space-x-15 mx-auto">
          <NavLink to="/" className="text-gray-700 hover:text-orange-600 font-medium">
            Home
          </NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-600 font-medium">
            Vacancy 
          </NavLink>
          <NavLink to="/house" className="text-gray-700 hover:text-orange-600 font-medium">
            House
          </NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-orange-600 font-medium">
            About
          </NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
            Contact
          </NavLink>
          <NavLink to="/faq" className="text-gray-700 hover:text-orange-600 font-medium">
            FAQs
          </NavLink>
        </nav>

        {/* Login Button on the Right */}
        <div>
          <button
            className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition w-30"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
