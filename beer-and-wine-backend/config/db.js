import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

export default connectDB;
