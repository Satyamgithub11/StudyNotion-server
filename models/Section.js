const mongoose = require("mongoose");

// define the section schema
const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
    },
    subSection: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SubSection",
        },
    ],
});

// exports the section model
module.exports = mongoose.model("Section", sectionSchema);
