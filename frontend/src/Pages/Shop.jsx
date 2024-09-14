import React from 'react'
import { Model } from '../Components/Model-Appearel/Model'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
      <Model />
      <Popular />  
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}
