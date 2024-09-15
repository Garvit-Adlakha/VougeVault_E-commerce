import React from 'react';

export const NewsLetter = () => {
  return (
    <div className="w-full max-w-4xl h-auto flex flex-col items-center justify-center mx-auto mb-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-xl shadow-lg">
      <h1 className="text-[#454545] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-[#454545] text-base sm:text-lg md:text-xl text-center mb-6">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white w-full max-w-3xl h-auto rounded-full border border-[#e3e3e3] shadow-md p-2 sm:p-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full sm:w-2/3 lg:w-3/4 ml-0 sm:ml-4 border-none outline-none text-[#616161] text-base sm:text-lg font-poppins py-3 px-4 rounded-full focus:ring-2 focus:ring-[#e1ffea22] transition duration-300 ease-in-out"
        />
        <button className="w-full sm:w-1/3 lg:w-1/4 h-12 sm:h-auto rounded-full bg-black text-yellow-500 text-base sm:text-lg font-semibold cursor-pointer mt-4 sm:mt-0 transition transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e1ffea22] focus:ring-offset-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};
