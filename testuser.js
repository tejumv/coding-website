// testUser.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI, { dbName: "Interactiveplatform" })
    .then(async () => {
        console.log("✅ MongoDB connected successfully!");
        await User.create({ name: "Rakshita", email: "teajswini@example.com", password: "1234", role: "Admin" });
        console.log("✅ New user added!");
        const allUsers = await User.find();
        console.log("All Users:", allUsers);
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ Error:", err));
