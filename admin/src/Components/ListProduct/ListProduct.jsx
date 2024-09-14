import { useEffect, useState } from "react";
import cross_icon from '../../assets/cross_icon.png';

export const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/api/v1/products/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/api/v1/products/removeproduct', {
      method: 'POST',  // Assuming POST request for removal
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    .then((res) => res.json())
    .then(() => fetchInfo()) // Re-fetch after removal
    .catch((err) => console.error('Error removing product:', err));
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">All Products List</h1>

      {/* Grid headings */}
      <div className="hidden md:grid grid-cols-6 gap-4 font-semibold mb-2">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <hr className="mb-4" />

      {/* Product List */}
      {allProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-6 gap-4 items-center mb-4 p-2 bg-gray-100 rounded-md"
        >
          {/* Product image */}
          <img
            className="w-full md:w-16 h-16 object-contain"
            src={product.image}
            alt={product.name}
          />
          {/* Product name */}
          <p className="font-medium text-center md:text-left">{product.name}</p>
          {/* Old price */}
          <p className="text-red-500 text-center md:text-left">${product.old_price}</p>
          {/* New price */}
          <p className="text-green-500 text-center md:text-left">${product.new_price}</p>
          {/* Category */}
          <p className="text-gray-700 text-center md:text-left">{product.category}</p>
          {/* Remove button */}
          <img
            className="cursor-pointer w-6 h-6 mx-auto md:mx-0"
            src={cross_icon}
            alt="Remove"
            onClick={() => remove_product(product.id)}
          />
        </div>
      ))}
    </div>
  );
};
