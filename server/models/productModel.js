import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sizes: [{ type: String }],
    image: { type: String, required: true },
    stock: { type: Number, default: 0 },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

productSchema.index({ createdAt: -1, _id: -1 });
productSchema.index({ category: 1, price: 1 });

export const Product = mongoose.model('Product', productSchema);
