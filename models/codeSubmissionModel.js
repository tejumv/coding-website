import mongoose from "mongoose";

const codeSubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  code: { type: String, required: true },
  language: { type: String, required: true },
  result: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const CodeSubmission = mongoose.model("CodeSubmission", codeSubmissionSchema);
