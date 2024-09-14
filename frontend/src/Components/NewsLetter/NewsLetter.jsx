import React from 'react';

export const NewsLetter = () => {
  return (
    <div className="w-2/3 h-[40vh] flex flex-col items-center justify-center mx-auto mb-[150px] px-[140px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <h1 className="text-[#454545] text-[55px] font-semibold">Get Exclusive Offers on your Email</h1>
      <p className="text-[#454545] text-[20px]">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border border-[#e3e3e3] mt-5">
        <input
          type="email"
          placeholder="Your Email"
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px] font-poppins"
        />
        <button className="w-[210px] h-[70px] rounded-full bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};
