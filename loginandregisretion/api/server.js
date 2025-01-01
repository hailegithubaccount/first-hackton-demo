import express from 'express';
import connectDB from './config/db.js';

import dotenv from 'dotenv';
// import foodRoutes from './routes/foodRoutes.js';
import userRoutes from './routes/userRoute.js';


dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Import routes


// Use the routes
app.use('/api/users', userRoutes); // Users-related routes
// app.use('/api/foods', foodRoutes); // Food-related routes

// Start the server
const PORT = process.env.PORT || 8888; // Default to port 8888
const HOST = process.env.HOST || '0.0.0.0'; // Default host

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
