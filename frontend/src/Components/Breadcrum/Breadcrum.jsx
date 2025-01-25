import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum flex items-center gap-2 text-gray-600 text-base font-semibold mt-14 mb-14 mx-10 lg:mx-44 capitalize">
      <span>Home</span>
      <img className="inline" src={arrow_icon} alt="arrow icon" />
      <span>Shop</span>
      {product && (
        <>
          <img className="inline" src={arrow_icon} alt="arrow icon" />
          <span>{product.category}</span>
          <img className="inline" src={arrow_icon} alt="arrow icon" />
          <span>{product.name}</span>
        </>
      )}
    </div>
  );
};
