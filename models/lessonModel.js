import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
    createdAt: { type: Date, default: Date.now },
});

export const Lesson = mongoose.model("Lesson", lessonSchema);
