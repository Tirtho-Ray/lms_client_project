import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ContentServices } from "./content.services";
import { httpStatus } from 'http-status';


const createContent = catchAsync(async (req, res) => {
    const content = await ContentServices.createContentInDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Content created successfully',
        data: content,
    });
});


const getAllContents = catchAsync(async (req, res) => {
    const contents = await ContentServices.getAllContents();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Contents fetched successfully',
        data: contents,
    });
});


const getContentById = catchAsync(async (req, res) => {
    const content = await ContentServices.getContentById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Content fetched successfully',
        data: content,
    });
});


const updateContent = catchAsync(async (req, res) => {
    const updatedContent = await ContentServices.updateContentById(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Content updated successfully',
        data: updatedContent,
    });
});


const deleteContent = catchAsync(async (req, res) => {
    const deletedContent = await ContentServices.deleteContentById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Content deleted successfully',
        data: deletedContent,
    });
});

export const ContentController = {
    createContent,
    getAllContents,
    getContentById,
    updateContent,
    deleteContent,
};
