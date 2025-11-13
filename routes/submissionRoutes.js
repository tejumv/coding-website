import express from "express";
import { CodeSubmission } from "../models/codeSubmissionModel.js";

const router = express.Router();

// Save new submission
router.post("/", async (req, res) => {
    const submission = new CodeSubmission(req.body);
    await submission.save();
    res.status(201).json(submission);
});

// Get all submissions
router.get("/", async (req, res) => {
    const submissions = await CodeSubmission.find();
    res.json(submissions);
});

export default router;
