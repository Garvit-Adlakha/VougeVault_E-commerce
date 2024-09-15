import React, { useEffect, useState } from 'react';
import banner1 from '../Assets/banner1.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/banner3.jpg';
import banners from './Banner.json';
import styles from './bannerStyle.module.css'; // Ensure this file contains the required styles
import './banner.css'; // Ensure this file is properly linked and contains additional styles if needed

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center' }} className="p-2 mx-auto my-4 mb-11">
      <button
        className="btn btn-primary m-2  text-gray-900 bg-gradient-to-r from-black via-yellow-500 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
"
        onClick={handlePrevClick}
      >←
       <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div className={`imageSize ${styles.slideContainer}`}>
        <div
          className={styles.innerContain}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <img src={banner1} alt='Banner 1' className={styles.slides} />
          <img src={banner2} alt='Banner 2' className={styles.slides} />
          <img src={banner3} alt='Banner 3' className={styles.slides} />
        </div>
      </div>

      <button
        className="btn btn-primary showButton m-2 text-gray-900 bg-gradient-to-r from-black via-yellow-500 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
"
        onClick={handleNextClick}
      >
        →
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Banner;
