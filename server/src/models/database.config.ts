import dotenv from 'dotenv';
dotenv.config();

import { connect } from 'mongoose';

export const dbConnect = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }

  try {
      await connect(mongoUri);
      console.log('📚 Database connected successfully!');
  } catch (error) {
      console.error('🐞 Error connecting to database: ', error);
  }
};

