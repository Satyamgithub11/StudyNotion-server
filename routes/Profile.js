const express = require("express")
const router = express.Router()
const {auth} = require("../middlewares/auth")

const {
    deleteAccount,
    updateProfile,
    getAllUserDetails,
    updateDisplayPicture,
    getEnrolledCourse,
} = require("../controllers/Profile")
//*************************************************************//
//              Profile routes                                 //
//**************************************************************//

// Delete user Account
router.delete("/deleteAccount", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getAllUserDetails", auth, getAllUserDetails)
//Get Enrolled courses
router.get("/getEnrolledCourse", auth, getEnrolledCourse)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router