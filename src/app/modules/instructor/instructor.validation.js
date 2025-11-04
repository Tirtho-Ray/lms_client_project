import { z } from "zod";


const educationSchema = z.object({
    degree: z.string().min(1, "Degree is required"),
    institution: z.string().min(1, "Institution is required"),
    yearOfGraduation: z
        .number()
        .int("Year must be an integer")
        .optional(),
});


export const createInstructorSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    profilePicture: z.string().optional(),
    bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
    isActive: z.boolean().optional(),
    education: z.array(educationSchema).optional(),
});


export const createInstructorValidation = {
    createInstructorSchema,
};
