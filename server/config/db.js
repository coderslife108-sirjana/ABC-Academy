const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI?.trim();
  if (!uri) {
    throw new Error(
      "MONGO_URI is not configured. Create server/.env from server/.env.example and set the MongoDB connection string."
    );
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    throw new Error(`MongoDB connection failed: ${err.message}`, { cause: err });
  }
};

module.exports = connectDB;
