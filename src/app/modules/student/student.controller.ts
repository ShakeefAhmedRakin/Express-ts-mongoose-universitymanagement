import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student is retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getStudentByIdFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: `Student with id ${id} is retrieved successfully`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deletedStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.deleteStudentFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: `Student with id ${id} is deleted successfully`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getStudentById,
  deletedStudentById,
};
