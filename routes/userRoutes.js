import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

// Add a new user
router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

export default router;
