import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({
  id = 'default-id', // Default value for id
  image = 'placeholder-image-url.jpg',
  name = 'Product Name',
  new_price = '0.00',
  old_price = '0.00'
}) => {
  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="item w-[350px] hover:scale-105 transition duration-600">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          onClick={handleImageClick}
          alt={name}
          className="w-full h-auto"
        />
      </Link>
      <p className="mt-1 mb-1">{name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-gray-700 text-lg font-semibold">
          ${new_price}
        </div>
        <div className="item-price-old text-gray-400 text-lg font-medium line-through">
          ${old_price}
        </div>
      </div>
    </div>
  );
};
