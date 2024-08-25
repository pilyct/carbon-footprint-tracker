import { FoodItem } from './models/food.model.js';
import { IUser } from './models/user.model.js';

// Define a sample data array of food items with additional attributes
const foodData: FoodItem[] = [
  { id: 1, name: 'Apple', category: 'Fruit', quantity: 150, carbonFootprint: 52, calories: 52, protein: 0.3, fat: 0.2, carbohydrates: 14, seasonality: 'Non-seasonal', origin: 'USA', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', quantity: 120, carbonFootprint: 90, calories: 89, protein: 1.1, fat: 0.3, carbohydrates: 23, seasonality: 'Non-seasonal', origin: 'Ecuador', price: 1.0 },
  { id: 3, name: 'Orange', category: 'Fruit', quantity: 200, carbonFootprint: 73, calories: 47, protein: 0.9, fat: 0.1, carbohydrates: 12, seasonality: 'Seasonal', origin: 'Spain', price: 1.5 },
  { id: 4, name: 'Broccoli', category: 'Vegetable', quantity: 100, carbonFootprint: 20, calories: 34, protein: 2.8, fat: 0.4, carbohydrates: 7, seasonality: 'Seasonal', origin: 'USA', price: 2.0 },
  { id: 5, name: 'Carrot', category: 'Vegetable', quantity: 100, carbonFootprint: 24, calories: 41, protein: 0.9, fat: 0.2, carbohydrates: 10, seasonality: 'Non-seasonal', origin: 'Netherlands', price: 1.8 },
  { id: 6, name: 'Spinach', category: 'Vegetable', quantity: 80, carbonFootprint: 27, calories: 23, protein: 2.9, fat: 0.4, carbohydrates: 3, seasonality: 'Seasonal', origin: 'USA', price: 2.5 },
  { id: 7, name: 'Chicken Breast', category: 'Meat', quantity: 200, carbonFootprint: 165, calories: 165, protein: 31, fat: 3.6, carbohydrates: 0, seasonality: 'Non-seasonal', origin: 'USA', price: 5.0 },
  { id: 8, name: 'Beef Steak', category: 'Meat', quantity: 150, carbonFootprint: 263, calories: 250, protein: 26, fat: 18, carbohydrates: 0, seasonality: 'Non-seasonal', origin: 'Australia', price: 8.0 },
  { id: 9, name: 'Pork Chop', category: 'Meat', quantity: 180, carbonFootprint: 143, calories: 231, protein: 21, fat: 16, carbohydrates: 0, seasonality: 'Non-seasonal', origin: 'USA', price: 6.0 },
  { id: 10, name: 'Cheddar Cheese', category: 'Dairy', quantity: 50, carbonFootprint: 174, calories: 402, protein: 25, fat: 33, carbohydrates: 1.3, seasonality: 'Non-seasonal', origin: 'UK', price: 3.0 },
  { id: 11, name: 'Milk', category: 'Dairy', quantity: 250, carbonFootprint: 112, calories: 42, protein: 3.4, fat: 1, carbohydrates: 5, seasonality: 'Non-seasonal', origin: 'USA', price: 1.0 },
  { id: 12, name: 'Yogurt', category: 'Dairy', quantity: 200, carbonFootprint: 120, calories: 59, protein: 5, fat: 3.3, carbohydrates: 4, seasonality: 'Non-seasonal', origin: 'Germany', price: 1.5 },
  { id: 13, name: 'Rice', category: 'Grain', quantity: 250, carbonFootprint: 50, calories: 130, protein: 2.7, fat: 0.3, carbohydrates: 28, seasonality: 'Non-seasonal', origin: 'Thailand', price: 2.0 },
  { id: 14, name: 'Quinoa', category: 'Grain', quantity: 150, carbonFootprint: 43, calories: 120, protein: 4.1, fat: 1.9, carbohydrates: 21, seasonality: 'Non-seasonal', origin: 'Peru', price: 4.0 },
  { id: 15, name: 'Oats', category: 'Grain', quantity: 200, carbonFootprint: 55, calories: 389, protein: 16.9, fat: 6.9, carbohydrates: 66, seasonality: 'Non-seasonal', origin: 'Canada', price: 3.0 },
  { id: 16, name: 'Almonds', category: 'Other', quantity: 30, carbonFootprint: 100, calories: 579, protein: 21, fat: 49, carbohydrates: 22, seasonality: 'Non-seasonal', origin: 'USA', price: 8.0 },
  { id: 17, name: 'Cashews', category: 'Other', quantity: 40, carbonFootprint: 92, calories: 553, protein: 18, fat: 44, carbohydrates: 30, seasonality: 'Non-seasonal', origin: 'Ivory Coast', price: 7.0 },
  { id: 18, name: 'Avocado', category: 'Other', quantity: 100, carbonFootprint: 186, calories: 160, protein: 2, fat: 15, carbohydrates: 9, seasonality: 'Seasonal', origin: 'Mexico', price: 2.5 },
  { id: 19, name: 'Tofu', category: 'Other', quantity: 200, carbonFootprint: 87, calories: 76, protein: 8, fat: 4.8, carbohydrates: 1.9, seasonality: 'Non-seasonal', origin: 'China', price: 3.0 },
  { id: 20, name: 'Chocolate Bar', category: 'Other', quantity: 100, carbonFootprint: 130, calories: 535, protein: 7.6, fat: 30, carbohydrates: 59, seasonality: 'Non-seasonal', origin: 'Switzerland', price: 2.0 }
];

// Define the sample data for users
export const userSeedData: IUser[] = [
  {
    name: 'John Doe',
    email: 'john.doe@email.com',
    password: '1234',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    password: '1234',
  },
];

// Default export for the main data
export default foodData;





