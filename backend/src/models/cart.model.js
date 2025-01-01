import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure the cart is always associated with a user
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true, // Ensure the cart is always associated with a product
    },
    size: {
      type: String,
      default: "N/A",
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Prevent negative or zero quantities
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

export const Cart = mongoose.model("Cart", cartSchema);
