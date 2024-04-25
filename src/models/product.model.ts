import { model, Schema, Document } from 'mongoose';
import { Product } from '@/interfaces/product.interace';
import { bool, num } from 'envalid';

const ProductSchema: Schema = new Schema({
  ProductId: {
    type: String,
    required: true,
    unique: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  Quantity: {
    type:Number,
    required:true
  },
  IsActive: {
    type:bool,
    required:true
  }
});

export const ProductModel = model<Product & Document>('Product', ProductSchema);
