import React, { useEffect, useState } from 'react';
import banner1 from '../Assets/banner1.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/banner3.jpg';
import banners from './Banner.json';

const Banner = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setSlide((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNextClick = () => {
    setSlide((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="mx-auto my-4 mb-11 flex items-center justify-center w-full max-w-screen-xl">
      {/* Previous Button */}
      <button
        className="left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-black via-yellow-500 to-yellow-300 text-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-full text-xl px-4 py-2"
        onClick={handlePrevClick}
      >
        ←
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Banner Container */}
      <div className=" overflow-hidden w-full h-[500px] md:h-[600px] m-4">
        <div
          className="flex transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          <img src={banner1} alt='Banner 1' className="w-full h-full object-contain flex-shrink-0" />
          <img src={banner2} alt='Banner 2' className="w-full h-full object-contain flex-shrink-0" />
          <img src={banner3} alt='Banner 3' className="w-full h-full object-contain flex-shrink-0" />
        </div>
      </div>

      {/* Next Button */}
      <button
        className="right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-black via-yellow-500 to-yellow-300 text-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-full text-xl px-4 py-2"
        onClick={handleNextClick}
      >
        →
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Banner;
