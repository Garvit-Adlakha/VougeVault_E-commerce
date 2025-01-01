import express from "express";
import {
    addToCart,
} from "../controllers/cart.controlller.js";
import {verifyJwt }from '../middlewares/auth.middlewares.js'

const router = express.Router();

// POST - Add to cart



//secure routes
router.post("/add",verifyJwt, addToCart);

export default router;
