import { Product } from '../models/product.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

// Add a new product
export const addProduct = asyncHandler(async (req, res) => {
    const { id, name,category,new_price, price } = req.body;

    // Validate required fields
    if (![id, name,category, new_price, price].every((field) => field?.trim())) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({ id, name });
    if (existingProduct) {
        throw new ApiError(402, "Product already exists");
    }

    // Validate and upload product image
    const productImage = req.files?.image?.[0]?.path;
    if (!productImage) {
        throw new ApiError(401, "Image file is missing");
    }

    let image;
    try {
        image = await uploadOnCloudinary(productImage);
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new ApiError(500, "Failed to upload image");
    }

    // Create product object
    const product = {
        id,
        name,
        new_price,
        price,
        category,
        image:image.url,
    };

    // Save product to database
    const createdProduct = await Product.create(product);

    // Send success response
    res.status(200).json(
        new ApiResponse(200, createdProduct, "Product added successfully")
    );
});
// Remove a product
export const removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Product removed");

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all products
export const getAllProducts = asyncHandler(async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products fetched");

        res.status(200).json(new ApiResponse(200, products, "All products fetched successfully"));
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
export const getProductsByCategory=asyncHandler(async(req,res)=>{
    try{
        let products=await Product.find({
            category:req.params.category
        })
        console.log("Products fetched by category");
        console.log(products);
        res.status(200).json(new ApiResponse(200, products, "Products fetched by category successfully"));
    }
    catch(error){
        res.status(500).json(new ApiResponse(500,{},"Error fetching products by category"));
    }
})
export const getProductById=asyncHandler(async (req,res)=>{
    try{
        let product=await Product.findOne({
            id:req.params.id
        })
        console.log("Product fetched by id");
        console.log(product);
        res.status(200).json(new ApiResponse(200, product, "Product fetched by id successfully"));
    }
    catch(error){
        res.status(500).json(new ApiResponse(500,{},"Error fetching product by id"));
    }
})