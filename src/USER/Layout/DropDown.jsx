import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full   px-4 py-2  text-sm font-medium text-cyan-700 focus:outline-none   "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <svg
            className="-mr-1 ml-2 h-4 w-5 flex items-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-8-8 1.5-1.5L10 9.998 16.5 2.5 18 4l-8 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link to={"user-register"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
             Sign up
           </Link>
           <Link to={"user-login"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
             Sign in
          </Link>
           <Link to={"user-orders"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
            Orders
            </Link>
            <Link to={"user-wishlist"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
          Wishlist
           </Link>
           <Link to={"user-cart"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
           Cart
            </Link>
            <Link to={"user-register"}
              className="block px-4 py-2 text-sm font-semibold text-red-400 hover:bg-cyan-600 hover:text-gray-900"
              role="menuitem"
            >
          Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleDropdown;