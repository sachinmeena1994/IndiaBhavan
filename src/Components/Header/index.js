import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50 relative">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center hover:opacity-80 transition duration-300"
        >
          <img
            src="/logo.png"
            alt="India Bhavan Logo"
            className="h-16 w-auto"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-black focus:outline-none focus:ring-2 focus:ring-black"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 right-0 lg:w-1/2 lg:ml-auto bg-gray-200 lg:bg-transparent shadow-lg lg:shadow-none rounded-md lg:rounded-none z-10`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 p-6 lg:p-0 w-full">
            {[
              { path: "/", label: "HOME" },
              { path: "/menu", label: "MENU" },
              // { path: "/order-online", label: "ORDER ONLINE" },
              { path: "/catering", label: "CATERING" },
              { path: "/aboutus", label: "ABOUT" },
              { path: "/contact", label: "CONTACT" },
              { path: "/admin", label: "Admin" },
            ].map((item, index) => (
              <li
                key={index}
                className={`w-full lg:w-auto text-center flex justify-center group relative overflow-hidden transform transition-transform duration-300 hover:scale-125 ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false); // Close the menu when an item is clicked
                  }}
                  className={`block w-full lg:w-auto px-4 py-2 text-md font-extrabold text-red-600 lg:text-red-600 group-hover:text-white relative z-10 whitespace-nowrap ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </button>
                {/* Background Animation */}
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
              </li>
            ))}
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
