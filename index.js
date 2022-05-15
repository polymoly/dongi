import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/buddies.js";
import { statusCodes } from "./constants/statusCodes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => connect());
