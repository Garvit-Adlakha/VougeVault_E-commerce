import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className="navbar flex justify-between items-center p-4 shadow">
      {/* Logo Section */}
      <div className="nav-logo flex items-center gap-3">
        <img src={logo} alt="Shopper Logo" className="w-12 h-auto" />
        <p className="text-gray-900 text-3xl font-semibold">SHOPPER</p>
      </div>
      
      {/* Menu Section */}
      <ul className="nav-menu flex items-center list-none gap-12 text-gray-500 font-medium">
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li 
            key={item} 
            className="flex flex-col items-center cursor-pointer gap-1"
            onClick={() => setMenu(item)}
          >
            <Link to={`/${item === 'shop' ? '' : item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            {menu === item && (
              <hr className="border-none w-4/5 h-[3px] rounded-2xl bg-[#FF4141]" />
            )}
          </li>
        ))}
      </ul>
      {/* Login and Cart Section */}
      <div className="nav-login-cart flex items-center gap-6">
        <Link to="/login">
          <button className="px-6 py-2 bg-red-500 text-white rounded-full">Login</button>
        </Link>
        <div className="relative">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart Icon" aria-label="Cart" />
          </Link>
          <div className="nav-cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalCartItems()}
          </div>
        </div>
      </div>
    </div>
  );
};