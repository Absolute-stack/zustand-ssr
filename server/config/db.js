import mongoose from 'mongoose';

export async function connectDB() {
  const db_url = process.env.DB;
  if (!db_url) throw new Error('".env" Is Missing Mongodb Connection Url');
  try {
    mongoose.connection.on('connected', () =>
      console.log('MongoDB🏢 Connected Successfully'),
    );
    await mongoose.connect(db_url);
  } catch (err) {
    console.error(err);
  }
}
