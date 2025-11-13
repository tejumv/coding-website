const mongoose = require("mongoose");
const connectDB = require("./db");

connectDB();

// Simple schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);

// Insert a sample record
async function addUser() {
    const user = new User({ name: "Rakshita", email: "rakshita@gmail.com" });
    await user.save();
    console.log("✅ User inserted successfully!");
    mongoose.connection.close();
}

addUser();
