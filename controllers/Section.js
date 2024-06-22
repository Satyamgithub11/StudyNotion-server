const Section = require("../models/Section");
const Course = require("../models/Course");

// Create a new section
exports.createSection = async (req, res) => {
    try{
        // Extract the required properties from the request body
        const {sectionName, courseId} = req.body;

        // valadition the input 
        if(!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message:"Missing required properties",
            });
        }

        // create a new section with the given name 
        const newSection = await Section.create({sectionName});

        // add the new section to the course content array
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    courseContent: newSection._id,
                },
            },
            {new: true}
        )
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection",
                },
            })
            .exec();

        // return the updated course object in the response
        res.status(200).json({
            success: true,
            message: "Section created successfully",
            updatedCourse,
        });
    } catch(error){
        // handle errors
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Update section 
exports.updateSection = async (req, res) => {
    try{
        const {sectionName, sectionId} = req.body;
        const section = await Section.findByIdAndUpdate(
            sectionId,
            {sectionName},
            {new: true}
        );
        res.status(200).json({
            success: true,
            message: section,
        });

    } catch(error){
        console.error("Error updating section", error);
        res.status(500).json({
            success:false,
            message: "Interna server error",
        });

    }
};

// Delete a section
exports.deleteSection = async(req, res) => {
    try{
        const {sectionId} = req.params;
        await Section.findByIdAndDelete(sectionId);
        res.status(200).json({
            success:true,
            message: "Section deleted",
        });
    } catch(error){
        console.error("Error deleting section:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

