import express from "express";
import { Progress } from "../models/progressModel.js";

const router = express.Router();

// Update progress
router.post("/", async (req, res) => {
    const progress = new Progress(req.body);
    await progress.save();
    res.status(201).json(progress);
});

// Get all progress data
router.get("/", async (req, res) => {
    const progress = await Progress.find();
    res.json(progress);
});

export default router;
