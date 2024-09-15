import React from 'react';
import { Model } from '../Components/Model-Appearel/Model'; // Ensure the path is correct
import { Popular } from '../Components/Popular/Popular'; // Ensure the path is correct
import { Offers } from '../Components/Offers/Offers'; // Ensure the path is correct
import { NewCollections } from '../Components/NewCollections/NewCollections'; // Ensure the path is correct
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'; // Ensure the path is correct
import Banner from '../Components/Banner/Banner.jsx'; // Ensure the path is correct

export const Shop = () => {
  return (
    <div>
      {/* <Model />  */}
      <Banner />
      <Popular />  
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
