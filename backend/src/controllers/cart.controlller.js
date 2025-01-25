import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addToCart = asyncHandler(async (req, res) => {
    try {
        const { productId, quantity, size } = req.body;
        const userId = req.user._id; 

        const product = await Product.findOne({
            id: productId
        });
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Check if the product already exists in the cart
        const existingCartItem = await Cart.findOne({
            userId,
            productId,
            size,
        });

        if (existingCartItem) {
            // If the product exists, update the quantity
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.status(200).json(
                new ApiResponse(200, existingCartItem, "Added to existing cart successfully")
            );
        }

        // If the product doesn't exist, create a new cart item
        const newCartItem = new Cart({
            userId,
            productId,
            size: size || "NA", // Default size if not provided
            quantity,
        });

        await newCartItem.save();
        return res.status(201).json(
            new ApiResponse(201, newCartItem, "Added new cart item successfully")
        );
    } catch (error) {
        console.error(error); // Log error for debugging
        throw new ApiError(500, "Something went wrong while adding to cart");
    }
});

const removeFromCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const { productId, quantityToRemove, size } = req.body;
    const existingCartItem = await Cart.findOne({
        userId,
        productId,
        size: size || "NA",
    });

    if (!existingCartItem) {
        throw new ApiError(404, "Cart item not found");
    }

    // Validate quantity to remove
    if (quantityToRemove <= 0) {
        throw new ApiError(400, "Quantity to remove must be greater than zero");
    }

    // Check if trying to remove more than available quantity
    if (quantityToRemove > existingCartItem.quantity) {
        throw new ApiError(400, "Cannot remove more than the available quantity in the cart");
    }

    // Update or delete the cart item
    if (existingCartItem.quantity > quantityToRemove) {
        existingCartItem.quantity -= quantityToRemove;
        await existingCartItem.save();
        return res.status(200).json(
            new ApiResponse(200, existingCartItem, "Cart item updated successfully")
        );
    } else {
        await existingCartItem.delete();
        return res.status(200).json(
            new ApiResponse(200, {}, "Cart item removed successfully")
        );
    }
});
// Get total amount of products in the cart (calculation based on price * quantity)
const getTotalCartAmount = async (req, res) => {
    try {
        const userId = req.user._id; 

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
const getTotalCartItems = async (req, res) => {
    try {
        const userId = req.user._id; 

        const cartItems = await Cart.find({ userId });

        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

        res.status(200).json({ totalItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error calculating total items", error: error.message });
    }
};

export{
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
}