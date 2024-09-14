import { useState } from 'react';
import upload_area from '../../assets/upload_area.svg';

export const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const addProduct = async () => {
    console.log("Product details before upload:", productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    try {
      const uploadResponse = await fetch('http://localhost:4000/api/v1/products/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      responseData = await uploadResponse.json();
      console.log("Image upload response:", responseData);

      if (responseData && responseData.success) {
        product.image = responseData.image_url;
        console.log("Product details with image:", product);

        const addProductResponse = await fetch('http://localhost:4000/api/v1/products/addproduct', {
          method: "POST",
          headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
          },
          body: JSON.stringify(product),
        });

        const data = await addProductResponse.json();
        console.log("Add product response:", data);

        data.success ? alert("Product added successfully") : alert("Product addition failed");
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error during product upload:", error);
      alert("Something went wrong during the upload.");
    }
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
    console.log("Updated product details:", productDetails);  // Debugging log
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md w-full max-w-3xl'>
      {/* Product Title */}
      <div className='mb-6'>
        <label className='block text-sm font-medium text-gray-700'>Product Title</label>
        <input
          type='text'
          value={productDetails.name}
          onChange={changeHandler}
          name='name'
          placeholder='Enter product title'
          className='border border-gray-300 p-3 w-full mt-1 block rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center'
        />
      </div>

      {/* Price and Offer Price */}
      <div className='flex gap-4 mb-6'>
        <div className='flex-1'>
          <label className='block text-sm font-medium text-gray-700'>Price</label>
          <input
            type='text'
            name='old_price'
            value={productDetails.old_price}
            onChange={changeHandler}
            placeholder='Enter price'
            className='border border-gray-300 p-3 mt-1 block w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center'
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium text-gray-700'>Offer Price</label>
          <input
            type='text'
            value={productDetails.new_price}
            onChange={changeHandler}
            name='new_price'
            placeholder='Enter offer price'
            className='border border-gray-300 p-3 mt-1 block w-full rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center'
          />
        </div>
      </div>

      {/* Product Category */}
      <div className='mb-6'>
        <label className='block text-sm font-medium text-gray-700'>Product Category</label>
        <select
          name='category'
          value={productDetails.category}
          onChange={changeHandler}
          className='mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        >
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kid'>Kid</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className='mb-6'>
        <label htmlFor='file-input' className='block text-sm font-medium text-gray-700 text-center'>
          Upload Product Image
        </label>
        <div className='mt-2 flex justify-center'>
          <label htmlFor='file-input' className='cursor-pointer flex justify-center items-center'>
            <img src={image ? URL.createObjectURL(image) : upload_area} alt='Upload Area' className='w-48 h-48 object-contain' />
          </label>
          <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        </div>
      </div>

      {/* Submit Button */}
      <div className='text-right'>
        <button
          className='bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700'
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
