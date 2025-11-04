import express from "express";
import { EnrolController } from "./enrolment.controller.js";

const router = express.Router();

router.post("/", EnrolController.createEnrolCourse);
router.get("/", EnrolController.getAllEnrolCourses);
router.get("/:id", EnrolController.getEnrolCourseById);
router.patch("/:id", EnrolController.updateEnrolCourse);
router.delete("/:id/soft", EnrolController.softDeleteEnrolCourse);
router.delete("/:id/hard", EnrolController.hardDeleteEnrolCourse);

export const EnrolCourseRoutes = router;
