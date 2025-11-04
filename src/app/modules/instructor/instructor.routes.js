import express from "express";
import { InstructorController } from "./instructor.controller";

const router = express.Router();


router.post("/create-instructor", InstructorController.createCourse);

router.get("/", InstructorController.getAllInstructors);

router.get("/:id", InstructorController.getInstructorById);
router.put("/:id", InstructorController.updateInstructor);
router.delete("/:id", InstructorController.deleteInstructor);

export const InstructorRoutes = router;
