import dotenv from 'dotenv';
dotenv.config();

import { connect } from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }

  try {
      await connect(mongoUri as string, {
        dbName: 'cft-database', // database name to avoid automatic "test" name is MongoDB
      });
      console.log('📚 Database connected successfully!');
  } catch (error) {
      console.error('🐞 Error connecting to database: ', error);
  }
};

