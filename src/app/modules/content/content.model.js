const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publishDate: {
        type: Date
    }

});

export const Content = mongoose.model('Content', contentSchema);
