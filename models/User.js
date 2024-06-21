// import the mongoose library
import { Schema, model } from "mongoose";

// Define the user schema using the mongoose schema constructor
const userSchema = new Schema(
    {
        // define the name with type string, required, and trimmed
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        // define the email field with type string required, and trimmed
        email: {
            type: String,
            required: true,
            trim: true,
        },

        // define the password field with type string and requierd
        password: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            enum: ["Admin", "Student", "instructor"],
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        additionalDetails: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
        },
        course: [
            {
                type: Schema.Types.ObjectId,
                ref: "Course",
            },
        ],
        token: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        image:{
            type: String,
            required: true,
        },
        courseProgress: [
            {
                type: Schema.Types.ObjectId,
                ref: "courseProgress",
            },
        ],
    },
     // add timestamps for when the document is created and last modified
     {timestamps: true}
);

// export the mongoose model for the user schema, using the name "user"
export default model("user", userSchema);