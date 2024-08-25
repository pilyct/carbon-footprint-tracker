import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';


const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Function to generate a token and attach it to the user object
const generateTokenResponse = (user: IUser) => {
  // Define the payload with only necessary information
  const payload = {
    email: user.email,
  };

  // Sign the token with the payload
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', // Token expiration time
  });

  // Return a plain object including the user data and the token
  return {
    name: user.name,
    email: user.email,
    token, // Add the token to the user object
  };
};

export default generateTokenResponse;


