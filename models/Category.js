const mongoose = require("mongoose");

// Define the tag schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {type: String},
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

// exports the tag model
module.exports = mongoose.model("Category", categorySchema);