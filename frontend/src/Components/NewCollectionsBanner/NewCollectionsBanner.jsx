import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import new_image from '../Assets/new_image.png';

export const NewCollectionsBanner = () => {
  const navigate = useNavigate(); // Use the hook

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('./newCollections'); // Navigate to the NewCollection page
  };

  return (
    <div className='w-full h-auto flex justify-center items-center mb-24 px-4 sm:px-6 lg:px-12'>
      <img 
        src={new_image} 
        className="w-full max-w-4xl h-auto object-cover" 
        onClick={clickHandler} 
        alt="New Collection" 
      />
    </div>
  );
};
