import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProducts/RelatedProduct';

export const Product = () => {
  const { productById } = useContext(ShopContext);
  const productId=useParams().productId

  const [product, setProduct] = React.useState(null);

  useEffect(()=>{
    const fetchProduct=async()=>{
      try {
       const product= await productById(productId)
       setProduct(product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProduct();
  },[productById,productId])
  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </>
  );
};
