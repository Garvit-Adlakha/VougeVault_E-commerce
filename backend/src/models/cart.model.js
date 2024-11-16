import mongoose,{Schema} from "mongoose";
const cartSchema=new Schema({
    productId:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    } ,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      size: {
        type: String,
        default: "N/A",
      },
    quantity:{
        type:Number,
        required:true,
        min:1
    },

},{timestamps:true})
cartSchema.index({ userId: 1, productId: 1 }, { unique: true });
export const Cart=mongoose.model("Cart",cartSchema)