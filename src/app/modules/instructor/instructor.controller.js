import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { InstructorServices } from "./instructor.services";
import { httpStatus } from 'http-status';


const createCourse = catchAsync(async (req, res) => {
    const instructor = await InstructorServices.createCourseIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Instructor created successfully',
        data: instructor,
    });
});


const getAllInstructors = catchAsync(async (req, res) => {
    const instructors = await InstructorServices.getAllInstructors();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Instructors fetched successfully',
        data: instructors,
    });
});

const getInstructorById = catchAsync(async (req, res) => {
    const instructor = await InstructorServices.getInstructorById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Instructor fetched successfully',
        data: instructor,
    });
});


const updateInstructor = catchAsync(async (req, res) => {
    const updatedInstructor = await InstructorServices.updateInstructorById(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Instructor updated successfully',
        data: updatedInstructor,
    });
});


const deleteInstructor = catchAsync(async (req, res) => {
    const deletedInstructor = await InstructorServices.deleteInstructorById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Instructor deleted successfully',
        data: deletedInstructor,
    });
});

export const InstructorController = {
    createCourse,
    getAllInstructors,
    getInstructorById,
    updateInstructor,
    deleteInstructor,
};
