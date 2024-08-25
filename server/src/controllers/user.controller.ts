
import { Request, Response } from 'express';
// import { userSeedData } from '../data';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcryptjs';
import generateTokenResponse from '../utils/generateTokenResponse';

// --------- REGISTER
const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Generate the token response and return it
    const tokenResponse = generateTokenResponse(user);
    res.status(201).json(tokenResponse);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// --------- LOGIN
const login = async (req: Request, res: Response) => {
  const {email, password} = req.body; 
  
  try {
    // Find the user by email
    // const user = userSeedData.find(user => user.email === email && user.password === password);
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate the token response and return it
    const tokenResponse = generateTokenResponse(user);
    res.status(200).json(tokenResponse);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error: ', error });
  }
}



export {
  register,
  login,
};

  


