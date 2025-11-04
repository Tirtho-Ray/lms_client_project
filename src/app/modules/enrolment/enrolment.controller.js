import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { EnrolCourseServices } from "./enrolment.service.js";
import httpStatus from "http-status";

const createEnrolCourse = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.createEnrolCourseInDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Course enrolled successfully",
        data: result,
    });
});

const getAllEnrolCourses = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.getAllEnrolCoursesFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All enrolments fetched successfully",
        data: result,
    });
});

const getEnrolCourseById = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.getEnrolCourseByIdFromDB(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Enrolment fetched successfully",
        data: result,
    });
});

const updateEnrolCourse = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.updateEnrolCourseInDB(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Enrolment updated successfully",
        data: result,
    });
});

const softDeleteEnrolCourse = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.softDeleteEnrolCourseInDB(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Enrolment soft deleted successfully",
        data: result,
    });
});

const hardDeleteEnrolCourse = catchAsync(async (req, res) => {
    const result = await EnrolCourseServices.hardDeleteEnrolCourseInDB(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Enrolment permanently deleted",
        data: result,
    });
});

export const EnrolController = {
    createEnrolCourse,
    getAllEnrolCourses,
    getEnrolCourseById,
    updateEnrolCourse,
    softDeleteEnrolCourse,
    hardDeleteEnrolCourse
};
