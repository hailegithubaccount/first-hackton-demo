// models/food.js
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});

// Create the model using the schema
const Food = mongoose.model('Food', foodSchema);

// Export the model as a default export
module.exports = Food;
