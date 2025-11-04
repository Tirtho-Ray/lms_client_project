import { Course } from "./course.model.js";


const createCourseInDB = async (payload) => {
    const course = await Course.create(payload);
    return course;
};


const getAllCoursesFromDB = async (filters = {}) => {
    const courses = await Course.find(filters).populate('instructor');
    return courses;
};


const getSingleCourseFromDB = async (id) => {
    const course = await Course.findById(id).populate('instructor');
    return course;
};


const updateCourseInDB = async (id, payload) => {
    const updatedCourse = await Course.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedCourse;
};


const deleteCourseFromDB = async (id) => {
    const deletedCourse = await Course.findByIdAndDelete(id);
    return deletedCourse;
};

export const CourseServices = {
    createCourseInDB,
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    updateCourseInDB,
    deleteCourseFromDB,
};
