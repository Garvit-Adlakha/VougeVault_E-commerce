import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Model = () => {
  return (
    <div className="model h-screen bg-custom-gradient flex flex-col md:flex-row">
      {/* Right Section (Hero Image) */}
      <div className="model-right flex-1 flex items-center justify-center md:order-last">
        <img className="h-4/5" src={hero_image} alt="Hero Banner" />
      </div>
      {/* Left Section */}
      <div className="model-left flex-1 flex flex-col justify-center gap-5 p-8 md:pl-44 leading-tight">
        <h2 className="text-black text-2xl font-semibold">New Arrivals Only</h2>
        
        {/* Hand Icon with Text */}
        <div className="model-hand-icon flex items-center gap-5">
          <p className="text-black text-6xl font-bold">new</p>
          <img className="w-14" src={hand_icon} alt="New Arrival Icon" />
        </div>

        <p className="text-black text-6xl mt-[-5px] font-bold">collections</p>
        <p className="text-black text-6xl mt-[-3px] font-bold">for everyone</p>
        
        {/* Latest Collections Button */}
        <button className="model-latest-btn flex justify-center items-center gap-4 w-full md:w-80 h-16 rounded-full mt-5 bg-red-500 text-white text-xl font-medium">
          Latest collections
          <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};
