import mongoose, { Schema } from "mongoose";

const courseDifficulty = ['Beginner', 'Intermediate', 'Advanced'];
const courseStatus = ['Active', 'Inactive', 'Archived', "waiting"];


const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    courseVideo: {
        type: String,
    },
    difficulty: {
        type: String,
        enum: courseDifficulty,
        required: true
    },
    status: {
        type: String,
        enum: courseStatus,
        default: 'Active'
    },
    instructor: [{
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    }],
    courseStartDate: {
        type: Date,
    },
    courseEndDate: {
        type: Date,
    },
    upCoiningEnrolmentStartDate: {
        type: Date,
    },
    upCoiningEnrolmentEndDate: {
        type: Date,
    },
    modules: [{
        moduleTitle: {
            type: String,
            required: true
        },
        moduleDescription: {
            type: String,
            required: true
        },
        content: [{
            contentType: {
                type: String,
                enum: ['Video', 'Article', 'Quiz', 'Assignment'],
                required: true
            },
            contentUrl: {
                type: String,
                required: true
            },
            contentDescription: {
                type: String,
                required: true
            }
        }]
    }],
    courseContent: [{
        type: Schema.Types.ObjectId,
        ref: 'Content',
    }],
}, {
    timestamps: true
});

export const Course = mongoose.model('Course', courseSchema);
