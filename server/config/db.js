import mongoose from "mongoose";

// Function to connect to the MongoDB database

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/techzen`)

  } catch (error) {
    console.error(" Failed to connect to MongoDB", error);
  
  }
};
export default connectDB