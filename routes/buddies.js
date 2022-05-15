import express from "express";
import { createBuddy, getBuddy } from "../controllers/buddies.js";

const router = express.Router();

router.get("/:id", getBuddy);

router.post("/:id", createBuddy);

export default router;
