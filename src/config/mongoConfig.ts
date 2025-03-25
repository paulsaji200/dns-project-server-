import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const configs = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB connected");
  } catch (err) {
    if (err instanceof Error) {
      console.error("❌ MongoDB connection failed:", err.message);
    } else {
      console.error("❌ An unknown error occurred");
    }
    process.exit(1);
  }
};

export default configs;
