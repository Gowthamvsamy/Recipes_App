const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURL = "mongodb://localhost:27017/RecipesApp";

async function createDbConnection() {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = { createDbConnection };