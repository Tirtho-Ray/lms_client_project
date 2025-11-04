import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { CourseServices } from "./course.services.js";
import httpStatus from "http-status";


const createCourse = catchAsync(async (req, res) => {
    const course = await CourseServices.createCourseInDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Course created successfully",
        data: course,
    });
});


const getAllCourses = catchAsync(async (req, res) => {
    const courses = await CourseServices.getAllCoursesFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Courses retrieved successfully",
        data: courses,
    });
});


const getSingleCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const course = await CourseServices.getSingleCourseFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course retrieved successfully",
        data: course,
    });
});


const updateCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedCourse = await CourseServices.updateCourseInDB(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course updated successfully",
        data: updatedCourse,
    });
});


const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    await CourseServices.deleteCourseFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Course deleted successfully",
    });
});

export const CourseController = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
};
