import React from 'react';
import new_collection from '../Assets/new_collections';
import { Item } from '../Item/Item';

export const NewCollections = () => {
  return (
    <div className="newcollections flex flex-col items-center gap-5 mb-24 px-4 sm:px-6 lg:px-12">
      <h1 className="text-[#171717] text-5xl font-semibold">New Collections</h1>
      <hr className="w-52 h-1.5 rounded-xl bg-[#252525]" />
      <div className="collections grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};