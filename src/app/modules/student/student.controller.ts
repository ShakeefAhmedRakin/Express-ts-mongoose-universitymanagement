import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const result = await StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: "Student is retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getStudentByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: `Student with id ${id} is retrieved successfully`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getStudentById,
};
