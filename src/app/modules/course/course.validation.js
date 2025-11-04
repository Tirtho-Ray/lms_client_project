const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Enum for course difficulty
const courseDifficulty = ['Beginner', 'Intermediate', 'Advanced'];

// Enum for course status
const courseStatus = ['Active', 'Inactive', 'Archived', "waiting"];

// Course Schema
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
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
        }],
        assignments: [{
            assignmentTitle: {
                type: String,
                required: true
            },
            maxMarks: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }]
    }],
    enrolledStudents: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    timestamps: true
});

export const Course = mongoose.model('Course', courseSchema);

