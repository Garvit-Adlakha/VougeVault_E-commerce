import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id:{
    type:Number,
    required:true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  image:{
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category:{
    type:String,
    required:true,
    trim: true
  },
  available: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export { Product };