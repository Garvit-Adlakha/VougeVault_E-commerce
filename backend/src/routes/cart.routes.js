import express from "express";
import {
    addToCart,
    removeFromCart,
} from "../controllers/cart.controlller.js";
import {verifyJwt }from '../middlewares/auth.middlewares.js'

const router = express.Router();

// POST - Add to cart



//secure routes
router.post("/add",verifyJwt, addToCart);
router.post('/remove',verifyJwt,removeFromCart)

export default router;
