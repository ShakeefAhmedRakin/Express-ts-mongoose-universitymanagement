import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student } = req.body;

    // // VALIDATION
    // const { error } = studentValidationSchema.validate(student);

    // if (error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: error.details[0].message || "Something went wrong!",
    //   });
    // }

    const result = await UserServices.createStudentIntoDB(password, student);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: `Student is created successfully`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
