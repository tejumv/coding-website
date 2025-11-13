import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  status: { type: String, enum: ["not started", "in progress", "completed"], default: "not started" },
  lastAccessed: { type: Date, default: Date.now },
});

export const Progress = mongoose.model("Progress", progressSchema);
