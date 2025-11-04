import { Instructor } from "./instructor.model";

const createCourseIntoDB = async (payload) => {
    const instructor = await Instructor.create(payload);
    return instructor;
};


const getAllInstructors = async () => {
    const instructors = await Instructor.find();
    return instructors;
};


const getInstructorById = async (id) => {
    const instructor = await Instructor.findById(id);
    return instructor;
};


const updateInstructorById = async (id, payload) => {
    const updatedInstructor = await Instructor.findByIdAndUpdate(id, payload, { new: true });
    return updatedInstructor;
};


const deleteInstructorById = async (id) => {
    const deletedInstructor = await Instructor.findByIdAndDelete(id);
    return deletedInstructor;
};

export const InstructorServices = {
    createCourseIntoDB,
    getAllInstructors,
    getInstructorById,
    updateInstructorById,
    deleteInstructorById,
};
