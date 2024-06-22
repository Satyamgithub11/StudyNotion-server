// import the required modules
const express = require("express");
const router = express.Router()

// Import the controller

// course controllers import
const {
    createCourse,
    getAllCourse,
    getCourseDetails,
} = require("../controllers/Course");

// category controller import
const {
    showAllCategories,
    createCategory,
    createPageDetails,
} = require("../controllers/Category")

// section controller import
const {
    createSection,
    updateSection,
    deleteSection,
} = require ("../controllers/Section")

// subsection controller import
const {
    createSubSection,
    updateSubSection,
    deleteSubSection,
} = require("../controllers/Subsection")

// reting controllers import
const {
    createRating,
    getAverageRating,
    getAllRating,
} = require("../controllers/RatingAndReview")

