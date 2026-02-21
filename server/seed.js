import 'dotenv/config';
import mongoose from 'mongoose';
import { Product } from './models/productModel.js';

await mongoose.connect(process.env.DB);
await Product.deleteMany({});

await Product.insertMany([
  // Sneakers
  {
    name: 'Air Max 90',
    price: 120,
    category: 'sneakers',
    sizes: ['40', '41', '42', '43'],
    stock: 20,
    image: 'https://fakestoreapi.com/img/81fAn9VB7AL._AC_UY879_.jpg',
    description: 'Classic Nike sneaker',
  },
  {
    name: 'Ultra Boost',
    price: 180,
    category: 'sneakers',
    sizes: ['39', '40', '41', '42'],
    stock: 15,
    image:
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg',
    description: 'Adidas running shoe',
  },
  {
    name: 'Chuck Taylor',
    price: 65,
    category: 'sneakers',
    sizes: ['38', '39', '40', '41', '42'],
    stock: 40,
    image: 'https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg',
    description: 'Converse classic',
  },

  // Shirts
  {
    name: 'Slim Fit Tee',
    price: 25,
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 50,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    description: 'Cotton slim fit tee',
  },
  {
    name: 'Oxford Button Down',
    price: 55,
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 30,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description: 'Classic oxford shirt',
  },
  {
    name: 'Graphic Tee',
    price: 30,
    category: 'shirts',
    sizes: ['S', 'M', 'L'],
    stock: 25,
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    description: 'Street style graphic tee',
  },

  // Pants
  {
    name: 'Cargo Pants',
    price: 65,
    category: 'pants',
    sizes: ['30', '32', '34', '36'],
    stock: 30,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    description: 'Multi-pocket cargo pants',
  },
  {
    name: 'Slim Chinos',
    price: 75,
    category: 'pants',
    sizes: ['30', '32', '34'],
    stock: 20,
    image:
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg',
    description: 'Smart casual chinos',
  },
  {
    name: 'Joggers',
    price: 45,
    category: 'pants',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 35,
    image:
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg',
    description: 'Comfortable jogger pants',
  },

  // Accessories
  {
    name: 'Leather Belt',
    price: 35,
    category: 'accessories',
    sizes: ['S', 'M', 'L'],
    stock: 60,
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    description: 'Genuine leather belt',
  },
  {
    name: 'Snapback Cap',
    price: 28,
    category: 'accessories',
    sizes: ['One Size'],
    stock: 45,
    image:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg',
    description: 'Adjustable snapback',
  },
  {
    name: 'Canvas Backpack',
    price: 89,
    category: 'accessories',
    sizes: ['One Size'],
    stock: 18,
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    description: 'Durable canvas backpack',
  },
]);

console.log('✅12 Seeded Products');
await mongoose.disconnect();
