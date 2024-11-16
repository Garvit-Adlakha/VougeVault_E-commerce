import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";

// Add product to cart (or update quantity if already exists)
export const addToCart = async (req, res) => {
    try {
        const { userId, productId, size, quantity } = req.body;

        // Check if the product already exists in the user's cart
        const existingCartItem = await Cart.findOne({ userId, productId, size });

        if (existingCartItem) {
            // Update quantity if item already exists
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.status(200).json({ message: "Cart updated successfully", cartItem: existingCartItem });
        }

        // Create a new cart item if it doesn't exist
        const newCartItem = new Cart({ userId, productId, size, quantity });
        await newCartItem.save();
        res.status(201).json({ message: "Product added to cart", cartItem: newCartItem });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding product to cart", error: error.message });
    }
};

// Get all products in the user's cart
export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        // Populate the product details for the cart items
        const cartItems = await Cart.find({ userId })
            .populate("productId", "name new_price image");

        res.status(200).json(cartItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching cart", error: error.message });
    }
};

// Update product quantity in the cart
export const updateCartItem = async (req, res) => {
    try {
        const { userId, productId, size, quantity } = req.body;

        const cartItem = await Cart.findOne({ userId, productId, size });

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        // Update the quantity
        cartItem.quantity = quantity;
        await cartItem.save();

        res.status(200).json({ message: "Cart item updated successfully", cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating cart item", error: error.message });
    }
};

// Remove product from the cart
export const removeFromCart = async (req, res) => {
    try {
        const { userId, productId, size } = req.body;

        const cartItem = await Cart.findOneAndDelete({ userId, productId, size });

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({ message: "Product removed from cart", cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error removing product from cart", error: error.message });
    }
};

// Clear all products from the cart
export const clearCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const result = await Cart.deleteMany({ userId });

        res.status(200).json({ message: "Cart cleared successfully", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error clearing cart", error: error.message });
    }
};

// Get total amount of products in the cart (calculation based on price * quantity)
export const getTotalCartAmount = async (req, res) => {
    try {
        const { userId } = req.params;

        const cartItems = await Cart.find({ userId }).populate("productId", "new_price");

        const totalAmount = cartItems.reduce((total, item) => {
            return total + item.productId.new_price * item.quantity;
        }, 0);

        res.status(200).json({ totalAmount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error calculating total amount", error: error.message });
    }
};

// Get total number of items (sum of quantities) in the cart
export const getTotalCartItems = async (req, res) => {
    try {
        const { userId } = req.params;

        const cartItems = await Cart.find({ userId });

        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

        res.status(200).json({ totalItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error calculating total items", error: error.message });
    }
};
