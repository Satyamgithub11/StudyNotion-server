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
    categoryPageDetails,
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


// importing Middlewares
const {auth, isInstructor, isStudent, isAdmin} = require("../middlewares/auth");

// **************************************************//
//             Course Routes                         //
//***************************************************//

// course can only be created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)
// Add a section to a course
router.post("/addSection", auth, isInstructor, createSection)
// update a section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete A section
router.post("/deleteSection", auth, isInstructor, deleteSection)
// Edit sub section 
router.post("/updateSubSection", auth, isInstructor, updateSubSection )
// delete a sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a sub section to a section
router.post("?addSubSection", auth, isInstructor, createSubSection)
// get all Registered courses
router.post("/getAllCourse", getAllCourse)
// get Details for a specific courses
router.post("/getCourseDetails", getCourseDetails)

//**************************************************************************//
//              Category routes (Only by Admin)                             //
//**************************************************************************//
// category can only be created by Admin
// TODO : Put isAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory )
router.post("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)
//*******************************************************************************//
//            Rating And review                                                  //
//*******************************************************************************//
router.post("/createRating", auth, isStudent, createRating)
router.post("/getAverageRating", getAverageRating)
router.post("/getReviews", getAllRating)

module.exports = router