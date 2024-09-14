import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products based on category
  const filtered_products = all_product.filter(item => item.category === props.category);

  return (
    <div className="ml-5 mr-5">
      <img
        className="block mt-7 mb-7 mx-auto w-[82%]"
        src={props.banner}
        alt={`${props.category} banner`}
      />

      <div className="flex justify-between items-center mx-[170px]">
        <p>
          <span className="font-semibold">
            Showing 1-{filtered_products.length}
          </span>{' '}
          out of {all_product.length} Products
        </p>
        <div className="pt-3 pb-3 pr-5 pl-5 rounded-full border border-gray-500 flex items-center">
          Sort by <img src={dropdown_icon} alt="Sort Icon" className="ml-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-4 w-full mt-5 mb-24">
        {filtered_products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-36 mb-36 mx-auto w-[233px] h-[69px] rounded-full bg-gray-200 text-gray-500 text-lg font-medium">
        Explore more
      </div>
    </div>
  );
};
