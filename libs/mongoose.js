import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return true;
  }

  if (!process.env.MONGODB_URL) {
    console.log("Missing MongoDB URL");
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.log("MongoDB connection error:", error);
    return false;
  }
};