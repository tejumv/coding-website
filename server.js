// -------------------------
// server.js
// -------------------------
import userRoutes from "./routes/userRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { User } from "./models/user.js";
import { Lesson } from "./models/lessonModel.js";
import { Progress } from "./models/progressModel.js";
import { CodeSubmission } from "./models/codeSubmissionModel.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/submissions", submissionRoutes);


// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Error:", err));

// -----------------------------
// USERS ROUTES
// -----------------------------
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post("/users", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User created", user });
});

// -----------------------------
// LESSONS ROUTES
// -----------------------------
app.get("/lessons", async (req, res) => {
    const lessons = await Lesson.find();
    res.json(lessons);
});

app.post("/lessons", async (req, res) => {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.json({ message: "Lesson added", lesson });
});

// -----------------------------
// PROGRESS ROUTES
// -----------------------------
app.get("/progress", async (req, res) => {
    const progress = await Progress.find();
    res.json(progress);
});

app.post("/progress", async (req, res) => {
    const prog = new Progress(req.body);
    await prog.save();
    res.json({ message: "Progress saved", prog });
});

// -----------------------------
// SUBMISSIONS ROUTES
// -----------------------------
app.get("/submissions", async (req, res) => {
    const subs = await CodeSubmission.find();
    res.json(subs);
});

app.post("/submissions", async (req, res) => {
    const sub = new CodeSubmission(req.body);
    await sub.save();
    res.json({ message: "Code submitted", sub });
});

// -----------------------------
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
