import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'default-avatar.png',
    },
    bio: {
        type: String,
        maxlength: 500,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    education: [{
        degree: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        yearOfGraduation: {
            type: Number,
        },
    }],
});

export const Instructor = mongoose.model('Instructor', instructorSchema);
