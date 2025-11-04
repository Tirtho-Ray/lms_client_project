import express from "express";
import { InstructorController } from "./instructor.controller";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();


router.post("/create-instructor", InstructorController.createCourse);

router.get("/", InstructorController.getAllInstructors);

router.get("/:id", auth(USER_ROLE.ADMIN), InstructorController.getInstructorById);
router.put("/:id", InstructorController.updateInstructor);
router.delete("/:id", InstructorController.deleteInstructor);

export const InstructorRoutes = router;
