import mongoose, { Schema } from "mongoose";

const enrolmentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    paymentMethod: {
        type: String,
        enum: ['Bkash', 'Nagod', 'Rocket', 'upay'],
        required: true
    },
    paymentNumber: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Enrolment = mongoose.model('Enrolment', enrolmentSchema);
