import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ShopContext = createContext(null);

const setSize = (setCartItems, itemId, size) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: {
      ...prev[itemId],
      size: size
    }
  }));
};

const getTotalCartItems = (cartItems) => 
  Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);

const getTotalCartAmount = (cartItems, allProducts) => {
  let totalAmount = 0;
  for (let item in cartItems) {
    if (cartItems[item].quantity > 0) {
      let itemInfo = allProducts.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item].quantity;
      }
    }
  }
  return totalAmount;
};

const getDefaultCart = (products) => {
  const cart = {};
  Object.values(products).forEach(product => {
    cart[product.id] = { quantity: 0, size: null };
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/products/allproducts');
        setAllProducts(response.data);
        setCartItems(getDefaultCart(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

const productsByCategory = React.useCallback(async (category) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/products/category/${category}`);
    const products = response.data.data || [];
    setAllProducts(products);
    setCartItems(getDefaultCart(products));
    return products
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
}, [setAllProducts, setCartItems]);


const productById=async (id)=>{  
  try{
      const response=await axios.get(`http://localhost:4000/api/v1/products/product/${id}`);
      console.log(response.data.data);
      return response.data.data;
  }
  catch(error){
      console.error("Error fetching product by id:",error);
  }
 }

  const addToCart = async (itemId, quantity, size) => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/cart/add', {
        productId: itemId,
        quantity,
        size
      });
      if (response.status === 200 || response.status === 201) {
        // Update the cart state with the response data
        const updatedCartItem = response.data.data;
        setCartItems((prev) => ({
          ...prev,
          [itemId]: {
            quantity: updatedCartItem.quantity,
            size: updatedCartItem.size
          }
        }));
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId]?.quantity || 0;
      if (currentQuantity > 1) {
        return {
          ...prev,
          [itemId]: {
            ...prev[itemId],
            quantity: currentQuantity - 1,
          }
        };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  const contextValue = React.useMemo(() => ({
    allProducts,
    setSize: (itemId, size) => setSize(setCartItems, itemId, size),
    cartItems,
    addToCart,
    removeFromCart,
    productsByCategory,
    productById,
    getTotalCartAmount: () => getTotalCartAmount(cartItems, allProducts),
    getTotalCartItems: () => getTotalCartItems(cartItems)
  }), [allProducts, cartItems, productsByCategory]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;