const mongoose = require("mongoose");

const courseProgress = new mongoose.Schema({
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    completeVideos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubSection",
        },
    ],
});

module.exports = mongoose.model("courseProgress", courseProgress);