import express from "express";
import { CourseController } from "./course.controller.js";

const router = express.Router();

router.post("/create-course", CourseController.createCourse);
router.get("/", CourseController.getAllCourses);
router.get("/:id", CourseController.getSingleCourse);
router.patch("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);

export const CourseRoutes = router;
