import React from 'react';
import all_products from '../Assets/all_product.js';
import { Item } from '../Item/Item';

export const Popular = () => {
  const getItemsAtIntervals = () => {
    return all_products.filter((_, index) => (index + 1) % 6 === 1);
  };

  const itemsToDisplay = getItemsAtIntervals();

  return (
    <div className="flex flex-col items-center gap-8 mb-24 px-4 sm:px-6 lg:px-12 ">
      <h1 className='text-[#171717] text-4xl font-bold mb-4'>
        Popular Picks
      </h1>
      <hr className='w-24 h-1.5 rounded-xl bg-[#252525] mb-6' />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[90%]">
        {itemsToDisplay.map((item) => (
        <div
          key={item.id}
          className='bg-white p-4 rounded-lg shadow-lg w-fit hover:shadow-2xl transition-shadow duration-300'
          >
          <Item 
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            className="transition-transform duration-300 transform hover:scale-105 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%]"
          />
          </div>
        ))}
      </div>
    </div>
  );
};
