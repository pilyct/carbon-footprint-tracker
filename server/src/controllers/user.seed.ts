import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { userSeedData } from '../data'; // Adjust the path if necessary
import { UserModel } from '../models/user.model'; // Adjust the path if necessary
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

// Seed User Data
export const seedUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const usersCount = await UserModel.countDocuments();
    console.log(`Number of users found: ${usersCount}`);

    if (usersCount > 0) {
      console.log("User Seed is already done!");
      if (res) res.status(200).send("User Seed is already done!");
      return;
    }

    // Hash passwords before inserting into the database
    const usersWithHashedPasswords = await Promise.all(
      userSeedData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await UserModel.create(usersWithHashedPasswords);
    console.log("User Seed Is Created!");
    if (res) res.status(201).send("User Seed Is Created!");
  } catch (error) {
    console.error("Error seeding users:", error);
    if (res) res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to seed the database (standalone execution)
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: 'cft-database', // database name to avoid automatic "test" name is MongoDB
    });
    console.log('MongoDB connected');

    // Manually call seedUsers without req/res for standalone execution
    await seedUsers(
      {} as Request,
      {
        status: (statusCode) => ({
          send: (message) => console.log(`Status ${statusCode}: ${message}`),
          json: (message) => console.log(`Status ${statusCode}: ${JSON.stringify(message)}`),
        }),
      } as Response,
      () => {} // Dummy next function
    );

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

// Execute the seedDatabase function if run directly
if (require.main === module) {
  seedDatabase();
}

