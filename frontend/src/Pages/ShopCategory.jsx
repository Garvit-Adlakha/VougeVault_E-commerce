import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { productsByCategory } = useContext(ShopContext);
  const [filtered_products, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productsByCategory(props.category);
        setFilteredProducts(products ?? []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [productsByCategory, props.category]);

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
    <div className="px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-100 py-8">
      <img
        className="block mt-7 mb-7 mx-auto w-full max-w-7xl h-auto object-cover rounded-lg"
        src={props.banner}
        alt={`${props.category} banner`}
      />

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <p className="text-sm sm:text-base font-semibold text-gray-700">
          Showing 1-{Math.min(productsToShow, sortedProducts.length)} of {sortedProducts.length} Products
        </p>
        <button
          onClick={handleSortToggle}
          type="button"
          className="mt-4 sm:mt-0 flex items-center rounded-full border border-gray-400 py-2 px-4 text-sm sm:text-base font-medium text-gray-600 hover:bg-gray-200 transition duration-300"
        >
          Sort by Price
          <img src={dropdown_icon} alt="Sort Icon" className="ml-2 w-4 h-4" />
          <span className="ml-2">{sortOrder === 'low-to-high' ? 'Low to High' : 'High to Low'}</span>
        </button>
      </div>
      <div className='flex justify-center items-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 gap-6 mb-16 w-full max-w-fit">
        {sortedProducts.slice(0, productsToShow).map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
      {productsToShow < sortedProducts.length && (
        <button
          onClick={handleShowMore}
          type="button"
          aria-label="Show more products"
          className="flex items-center justify-center mx-auto w-full max-w-xs h-[50px] rounded-full bg-gray-800 text-white text-base font-medium cursor-pointer hover:bg-gray-600 transition duration-300"
        >
          Explore more
        </button>
      )}
    </div>
  );
};