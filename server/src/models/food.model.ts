import { Schema, model } from 'mongoose';

// Define the FoodItem interface
export interface FoodItem {
  id: number;
  name: string;
  category: 'Fruit' | 'Vegetable' | 'Meat' | 'Dairy' | 'Grain' | 'Other';
  quantity: number; // Quantity in grams
  carbonFootprint: number; // Carbon footprint in grams of CO2 per 100 grams
  calories?: number; // Calories per 100 grams
  protein?: number; // Protein in grams per 100 grams
  fat?: number; // Fat in grams per 100 grams
  carbohydrates?: number; // Carbohydrates in grams per 100 grams
  seasonality?: 'Seasonal' | 'Non-seasonal'; // Availability
  origin?: string; // Country or region of origin
  price?: number; // Price per 100 grams
}

// Define a sample data array of food items with additional attributes
export const FoodItemSchema = new Schema<FoodItem>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['Fruit', 'Vegetable', 'Meat', 'Dairy', 'Grain', 'Other'], required: true },
  quantity: { type: Number, required: true },
  carbonFootprint: { type: Number, required: true },
  calories: { type: Number },
  protein: { type: Number },
  fat: { type: Number },
  carbohydrates: { type: Number },
  seasonality: { type: String, enum: ['Seasonal', 'Non-seasonal'] },
  origin: { type: String },
  price: { type: Number }
});

export const FoodItemModel = model<FoodItem>('FoodItem', FoodItemSchema);
