import React from 'react';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';

export const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh]">
      <h1 className="text-[#171717] text-5xl font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />
      <div className="mt-[50px] flex gap-[30px]">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
