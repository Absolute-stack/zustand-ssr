import express from 'express';
import { getFilters, getProducts } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/filters', getFilters);

export default productRouter;
