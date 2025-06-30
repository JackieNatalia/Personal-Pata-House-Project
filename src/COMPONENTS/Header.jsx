import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-100 sticky top-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-30 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-600 font-medium">Vacancy</NavLink>
          <NavLink to="/house" className="text-gray-700 hover:text-orange-600 font-medium">House</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</NavLink>
          <NavLink to="/faq" className="text-gray-700 hover:text-orange-600 font-medium">FAQs</NavLink>
        </nav>

        {/* Desktop Logout Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
            Logout
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-700 focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 pb-4 space-y-2 shadow-md">
          <NavLink to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">Home</NavLink>
          <NavLink to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">Vacancy</NavLink>
          <NavLink to="/house" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">House</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">About</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">Contact</NavLink>
          <NavLink to="/faq" onClick={toggleMenu} className="block text-gray-700 hover:text-orange-600 font-medium">FAQs</NavLink>
          <button className="w-full mt-2 bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
