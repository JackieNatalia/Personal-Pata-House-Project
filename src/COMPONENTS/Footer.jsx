import React from 'react';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      {/* Top Border Line */}
      <div className="mx-[6vw] border-t-2 border-orange-400/50 pt-10"></div>

      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-6">
          {/* Left: Logo */}
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <img src={Logo} alt="Logo" className="h-30 mr-3" />
               
              </div>
            </div>
          </div>

          {/* Right: Contact Info + Social Icons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end space-y-4">
            <div className="text-xs md:text-sm text-gray-600 space-y-2">
              <div className="flex pt-3">
                <i className="fas fa-map-marker-alt mr-2 text-orange-600"></i>
                <span>Nakuru, Kenya</span>
              </div>
              <div className="flex items-center justify-center md:justify-end flex-wrap pb-4">
                <i className="fas fa-phone mr-2 text-orange-600"></i>
                <span>+254 111 817 007</span>
                <span className="mx-4 text-orange-600">|</span>
                <i className="fas fa-fax mr-2 text-orange-600"></i>
                <span>+254 117 223 832</span>
              </div>
            </div>

            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="text-orange-600 hover:text-orange-700"><i className="fas fa-rss"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-4 text-xs md:text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center flex-wrap pb-10">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-600 mb-2">
            <a href="#" className="hover:text-orange-600">About Us</a>
            <a href="#" className="hover:text-orange-600">Contact Us</a>
            <a href="#" className="hover:text-orange-600">Help</a>
            <a href="#" className="hover:text-orange-600">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600">Disclaimer</a>
          </div>
          <div className="text-gray-600 text-center md:text-right">
            <a href="#" className="hover:text-orange-600">
              &copy; 2025 PataHouse. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;