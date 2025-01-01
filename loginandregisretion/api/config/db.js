// db.js
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if there's an error
  }
};


export default connectDB;




// HOST=0.0.0.0
// PORT=8888
// JWTSECRATE=tomandjerry
// MONGO_URI= "mongodb+srv://auth:auth@cluster0.5krmu.mongodb.net/authentication?retryWrites=true&w=majority"
//  EXPIRESIN=1000d