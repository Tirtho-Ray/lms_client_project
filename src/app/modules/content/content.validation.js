import { z } from "zod";


export const createCourseSchema = z.object({
    name: z.string().min(1, "Course title is required"),
    description: z.string().min(1, "Course description is required"),
    instructor: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid instructor ID"),
    isPublished: z.boolean().optional(),
    publishDate: z.date().optional(),
});

export const createCourseValidation = {
    createCourseSchema,
};
