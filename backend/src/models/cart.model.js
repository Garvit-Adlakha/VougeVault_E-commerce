import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure the cart is always associated with a user
    },
    productIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true, // Ensure the cart is always associated with a product
      }
    ],
    size: {
      type: String,
      default: "N/A",
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields to the document, which represent the time when the document was created and last updated, respectively.
);

export const Cart = mongoose.model("Cart", cartSchema);
