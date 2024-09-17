import React from 'react';
import { Popular } from '../Components/Popular/Popular.jsx'; // Ensure the path is correct
import { NewCollectionsBanner } from '../Components/NewCollectionsBanner/NewCollectionsBanner.jsx'; // Ensure the path is correct
import { NewsLetter } from '../Components/NewsLetter/NewsLetter.jsx'; // Ensure the path is correct
import Banner from '../Components/Banner/Banner.jsx'; // Ensure the path is correct

export const Home = () => {
  return (
    <div>
      <Banner />
      <Popular />  
      <NewCollectionsBanner />
      <NewsLetter />
    </div>
  );
};
