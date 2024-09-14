import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';

export const Sidebar = () => {
  return (
    <div className='flex flex-row item-center justify-center pb-4 pt-8 gap-6 w-full h-full md:h-screen md:flex-col md:justify-normal bg-white shadow-lg'>
      {/* Add Product Link */}
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className='flex items-center justify-start ml-5 mr-5 p-3 rounded-md bg-gray-100 gap-4 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out'>
          <img src={add_product_icon} alt="Add Product" className='w-6 h-6' />
          <p className='text-gray-700 font-medium'>Add Product</p>
        </div>
      </Link>

      {/* Product List Link */}
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className='flex items-center justify-start ml-5 mr-5 p-3 rounded-md bg-gray-100 gap-4 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out'>
          <img src={list_product_icon} alt="Product List" className='w-6 h-6' />
          <p className='text-gray-700 font-medium'>Product List</p>
        </div>
      </Link>
    </div>
  );
};
