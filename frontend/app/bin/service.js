import mongoose from "mongoose";
import "dotenv/config";
let MONGODB_URI = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected");
  } catch (e) {
    console.log(e.message);
  }
}

connect();
