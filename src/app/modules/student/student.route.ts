import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

router.get("/", StudentControllers.getAllStudents);

router.get("/:id", StudentControllers.getStudentById);

router.delete("/:id", StudentControllers.deletedStudentById);

export const StudentRoutes = router;
