import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/ping', (req, res) => {
  res.send('Server works');
});

app.use('/api/products', productRouter);

console.log('Router loaded:', productRouter);
app.listen(8000, () => console.log('Listening to backend server on port 8000'));
