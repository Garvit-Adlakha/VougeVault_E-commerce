import express from "express";
import {
    addToCart,
    getCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems
} from "../controllers/cart.controlller.js";

const router = express.Router();

// POST - Add to cart
router.post("/add", addToCart);

// GET - Get user cart
router.get("/:userId", getCart);

// PUT - Update cart item
router.put("/update", updateCartItem);

// DELETE - Remove product from cart
router.delete("/remove", removeFromCart);

// DELETE - Clear cart
router.delete("/clear", clearCart);

// GET - Get total cart amount
router.get("/:userId/totalAmount", getTotalCartAmount);

// GET - Get total number of items in the cart
router.get("/:userId/totalItems", getTotalCartItems);

export default router;
