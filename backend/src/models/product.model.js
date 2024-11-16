import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: { // Corrected the spelling
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

export const Product = mongoose.model("Product", productSchema);
