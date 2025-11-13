require("dotenv").config();
const mongoose = require("mongoose");
const CodeSubmission = require("./models/codeSubmissionModel");

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("✅ MongoDB connected!");

        const newSubmission = new CodeSubmission({
            userId: "6734959d2fbc1f7b9cbb3421", // user _id
            lessonId: "673497aa8d89a7bb7b4c1012", // lesson _id
            code: "print('Hello World')",
            language: "Python",
            result: "Hello World",
            timestamp: new Date()
        });

        await newSubmission.save();
        console.log("✅ Code submission added successfully!");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ Error:", err));
