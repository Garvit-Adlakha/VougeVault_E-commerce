import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  // Function to handle menu item click
  const handleMenuClick = (item) => {
    setMenu(item);
    setSidebarOpen(false); // Close the sidebar on click
    navigate(`/${item === 'shop' ? '' : item}`); // Navigate to the selected page
  };

  return (
    <div className="navbar flex justify-between items-center p-4 shadow bg-white">
      {/* Logo Section */}
      <div className="nav-logo flex items-center gap-3">
        <img src="https://teeshopper.in/store_page_asset/images/VogueVault-Clothing.png" alt="Shopper Logo" className="w-12 h-auto" />
        <p className="text-gray-900 text-2xl font-semibold">VogueVault</p>
      </div>

      {/* Menu Section for larger screens */}
      <ul className="nav-menu hidden md:flex items-center list-none gap-12 text-gray-500 font-medium">
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li 
            key={item} 
            className="flex flex-col items-center cursor-pointer gap-1"
            onClick={() => {
              setMenu(item);
              navigate(`/${item === 'shop' ? '' : item}`); // Navigate to the selected page
            }}
          >
            <Link to={`/${item === 'shop' ? '' : item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && (
              <hr className="border-none w-4/5 h-[3px] rounded-2xl bg-yellow-500" />
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu for mobile */}
      <button 
        className="block md:hidden text-gray-500 focus:outline-none" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Login and Cart Section */}
      <div className="nav-login-cart flex items-center gap-6">
        <Link to="/login">
          <button className="hidden md:block px-6 py-2 bg-yellow-500 text-white rounded-full">Login</button>
        </Link>
        <div className="relative">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart Icon" aria-label="Cart" className="w-8 h-auto" />
          </Link>
          <div className="nav-cart-count absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalCartItems()}
          </div>
        </div>
      </div>

      {/* Sidebar Menu for mobile */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transform transition-transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white p-6">
          <button 
            className="text-gray-500 text-2xl float-right"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
          <ul className="mt-6">
            {["shop", "mens", "womens", "kids","login"].map((item) => (
              <li 
                key={item} 
                className={`py-2 px-4 cursor-pointer ${menu === item ? 'bg-black text-yellow-500' : ''}`}
                onClick={() => handleMenuClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
