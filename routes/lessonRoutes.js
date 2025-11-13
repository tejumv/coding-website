import express from "express";
import { Lesson } from "../models/lessonModel.js";

const router = express.Router();

// Add lesson
router.post("/", async (req, res) => {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json(lesson);
});

// Get all lessons
router.get("/", async (req, res) => {
    const lessons = await Lesson.find();
    res.json(lessons);
});

export default router;
