import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 py-10 bg-gray-100">
      <div className="flex items-center gap-5">
        <img src={footer_logo} alt="Logo" className="w-auto h-auto" />
        <p className="text-gray-800 text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex list-none gap-12 text-gray-800 text-lg">
        <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500">Company</li>
        <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500">Products</li>
        <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500">Offices</li>
        <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500">About</li>
        <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-500">Contact us</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-2 pb-1.5 bg-gray-50 border border-gray-200 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <img src={instagram_icon} alt="Instagram" className="w-6 h-6" />
        </div>
        <div className="p-2 pb-1.5 bg-gray-50 border border-gray-200 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <img src={pintester_icon} alt="Pinterest" className="w-6 h-6" />
        </div>
        <div className="p-2 pb-1.5 bg-gray-50 border border-gray-200 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full text-gray-900 text-lg mb-7">
        <hr className="w-4/5 h-0.5 bg-gray-400 rounded-full" />
        <p>&copy; 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};
