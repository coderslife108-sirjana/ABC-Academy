// Run once to create the first admin account:  node seed.js
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mongoose = require("mongoose");
const User = require("./models/User");

const run = async () => {
  const uri = process.env.MONGO_URI?.trim();
  if (!uri) {
    throw new Error(
      "MONGO_URI is not configured. Create server/.env from server/.env.example and set the MongoDB connection string."
    );
  }
  await mongoose.connect(uri);

  const email = "admin@abcacademy.com";
  const exists = await User.findOne({ email });

  if (exists) {
    console.log("Admin already exists:", email);
  } else {
    await User.create({
      name: "Head Admin",
      email,
      password: "ChangeMe123!", // change immediately after first login
      role: "admin",
    });
    console.log("Admin created:", email, "/ password: ChangeMe123!");
  }

  await mongoose.disconnect();
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
