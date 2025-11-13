require("dotenv").config();
const mongoose = require("mongoose");
const Lesson = require("./models/lessonModel");

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("✅ MongoDB connected!");
        const newLesson = new Lesson({
            title: "Print Hello World",
            description: "Intro to output in Python",
            difficulty: "Easy",
            language: "Python",
            sampleInput: "",
            sampleOutput: "Hello World"
        });
        await newLesson.save();
        console.log("✅ Lesson added successfully!");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ Error:", err));
