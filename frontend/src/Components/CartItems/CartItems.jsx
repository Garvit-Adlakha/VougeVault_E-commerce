import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  // Get the total cart amount using the provided function
  const subtotal = getTotalCartAmount();

  return (
    <div className="container mx-auto mt-10 p-5">
      {/* Cart Header */}
      <div className="grid grid-cols-6 gap-4 font-semibold border-b border-gray-200 pb-4 mb-4">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="grid grid-cols-6 gap-4 items-center border-b border-gray-200 py-4">
              <img className="h-24 w-24 object-cover" src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.new_price.toFixed(2)}</p>
              <button className="px-3 py-1 border border-gray-300 rounded">{cartItems[product.id]}</button>
              <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
              <img
                className="cursor-pointer h-6 w-6"
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
              />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals and Promo Section */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        {/* Cart Total Section */}
        <div className="border border-gray-200 p-6">
          <h1 className="text-xl font-semibold mb-4">Cart Total</h1>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className="flex justify-between mb-4">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold mb-6">
            <h3>Total</h3>
            <h3>${subtotal.toFixed(2)}</h3>
          </div>
          <button className="w-full py-2 bg-red-600 text-white rounded">Proceed to Checkout</button>
        </div>

        {/* Promo Code Section */}
        <div className="border border-gray-200 p-6">
  <p className="mb-4">If you have a promo code, enter it here:</p>
  <div className="flex flex-col lg:flex-row gap-4">
    <input
      type="text"
      placeholder="Promo code"
      className="flex-1 border border-gray-300 p-2 rounded"
    />
    <div className='flex justify-center items-center'>
    <button className="py-2 px-4 bg-gray-800 text-white rounded w-fit lg:w-auto">Submit</button>
  </div>
  </div>
</div>
      </div>
    </div>
  );
};
