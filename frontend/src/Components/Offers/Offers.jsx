import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

export const Offers = () => {
  return (
    <div className="w-[65%] h-[60vh] flex mx-auto px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[60px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[60px] font-semibold">Offers for you</h1>
        <p className="text-[#171717] text-[22px] font-semibold">Only on best Sellers Products</p>
        <button className="w-[282px] h-[70px] rounded-full bg-black border-none text-yellow-500 text-[22px] font-medium mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt="" className="h-auto object-contain" />
      </div>
    </div>
  );
};
