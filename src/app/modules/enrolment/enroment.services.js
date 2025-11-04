import { Enrolment } from "./enrolment.model.js";

// ✅ Create new enrolment
const createEnrolCourseInDB = async (payload) => {
    return await Enrolment.create(payload);
};

// ✅ Get all enrolments (excluding soft-deleted)
const getAllEnrolCoursesFromDB = async () => {
    return await Enrolment.find({ isDeleted: false })
        .populate('course')
        .populate('user');
};

// ✅ Get single enrolment
const getEnrolCourseByIdFromDB = async (id) => {
    return await Enrolment.findOne({ _id: id, isDeleted: false })
        .populate('course')
        .populate('user');
};

// ✅ Update only isActive
const updateEnrolCourseInDB = async (id, payload) => {
    if (!('isActive' in payload)) {
        throw new Error("Only 'isActive' field can be updated");
    }

    return await Enrolment.findByIdAndUpdate(
        id,
        { isActive: payload.isActive },
        { new: true }
    );
};

// ✅ Soft delete
const softDeleteEnrolCourseInDB = async (id) => {
    return await Enrolment.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    );
};

// ✅ Hard delete (permanent remove)
const hardDeleteEnrolCourseInDB = async (id) => {
    return await Enrolment.findByIdAndDelete(id);
};

export const EnrolCourseServices = {
    createEnrolCourseInDB,
    getAllEnrolCoursesFromDB,
    getEnrolCourseByIdFromDB,
    updateEnrolCourseInDB,
    softDeleteEnrolCourseInDB,
    hardDeleteEnrolCourseInDB
};
