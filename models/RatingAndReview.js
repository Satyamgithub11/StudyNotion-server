const mongoose = require("mongoose");

// Define the RatingAndReview schema
const ratingAndReviewsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    Course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
        index: "true",
    },
});

// export the RatingAndReview model
module.exports = mongoose.model("RatingAndReview", ratingAndReviewsSchema);
