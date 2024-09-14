import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="flex flex-col lg:flex-row gap-10 mx-10 lg:mx-44 my-10">
      <div className="left flex gap-4">
        <div className="image flex flex-col gap-4">
          <img className="h-[138px] w-[120px] object-cover" src={product.image} alt="Product preview 1" />
          <img className="h-[138px] w-[120px] object-cover" src={product.image} alt="Product preview 2" />
          <img className="h-[138px] w-[120px] object-cover" src={product.image} alt="Product preview 3" />
          <img className="h-[138px] w-[120px] object-cover" src={product.image} alt="Product preview 4" />
        </div>
        <div className="w-full lg:w-[586px] h-[600px]">
          <img className="object-cover w-full h-full" src={product.image} alt="Main product" />
        </div>
      </div>
      <div className="right flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        <div className="flex items-center gap-2">
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_dull_icon} alt="Star rating" />
          <p className="text-gray-500">(122 reviews)</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="oldprice text-gray-500 line-through">${product.old_price}</div>
          <div className="newprice text-2xl font-semibold text-red-600">${product.new_price}</div>
        </div>

        <div className="description text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum iusto incidunt quasi odit iure unde, magnam optio a ullam hic quos maiores aut est quod, fugiat eius quas! Laborum, soluta perferendis?
        </div>

        <div className="size mt-4">
          <h1 className="text-lg font-semibold">Select Size</h1>
          <div className="sizes flex gap-4 mt-2">
            <div className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-200">S</div>
            <div className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-200">M</div>
            <div className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-200">L</div>
            <div className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-200">XL</div>
            <div className="border border-gray-400 rounded px-4 py-2 cursor-pointer hover:bg-gray-200">XXL</div>
          </div>
        </div>

        <button className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>

        <p className="mt-4">
          <span className="font-semibold">Category:</span> Women, Tshirt, CropTop
        </p>
        <p>
          <span className="font-semibold">Tags:</span> Modern
        </p>
      </div>
    </div>
  );
};
