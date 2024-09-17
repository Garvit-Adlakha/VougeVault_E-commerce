import React from 'react';
import new_collection from '../Components/Assets/new_collections.js';
import { Item } from '../Components/Item/Item.jsx';

export const NewCollections = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-5xl font-bold text-center text-[#171717] mb-6">
          New Collections
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Discover the latest trends and exclusive collections.
        </p>
        <hr className="w-24 h-1.5 rounded-xl bg-[#252525] mx-auto mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {new_collection.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg w-fit hover:shadow-2xl transition-shadow duration-300"
            >
              <Item className="w-[80%] h-[80%]"
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
