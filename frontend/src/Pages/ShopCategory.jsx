import React, { useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filtered_products = all_product.filter(item => item.category === props.category);

  const [productsToShow, setProductsToShow] = useState(4);
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const handleShowMore = (event) => {
    event.preventDefault();
    setProductsToShow(prev => prev + 4);
  };

  const handleSortToggle = (event) => {
    event.preventDefault();
    setSortOrder(prev => (prev === 'low-to-high' ? 'high-to-low' : 'low-to-high'));
  };

  const sortedProducts = [...filtered_products].sort((a, b) => {
    return sortOrder === 'low-to-high' ? a.new_price - b.new_price : b.new_price - a.new_price;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <img
        className="block mt-7 mb-7 mx-auto w-full max-w-[100%]"
        src={props.banner}
        alt={`${props.category} banner`}
      />

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <p className="text-sm sm:text-base font-semibold">
          Showing 1-{Math.min(productsToShow, sortedProducts.length)}
          {' '}out of {sortedProducts.length} Products
        </p>
        <button
          onClick={handleSortToggle}
          type="button"
          className="mt-4 sm:mt-0 flex items-center rounded-full border border-gray-500 py-2 px-4 text-sm sm:text-base font-medium cursor-pointer"
        >
          Sort by Price
          <img src={dropdown_icon} alt="Sort Icon" className="ml-2 w-4 h-4" />
          <span className="ml-2">{sortOrder === 'low-to-high' ? 'Low to High' : 'High to Low'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
        {sortedProducts.slice(0, productsToShow).map((item) => (
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

      {productsToShow < sortedProducts.length && (
        <button
          onClick={handleShowMore}
          type="button"
          aria-label="Show more products"
          className="flex items-center justify-center mx-auto w-full max-w-xs h-[50px] rounded-full bg-gray-200 text-gray-500 text-base font-medium cursor-pointer"
        >
          Explore more
        </button>
      )}
    </div>
  );
};
