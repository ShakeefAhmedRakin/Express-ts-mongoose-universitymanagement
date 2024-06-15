import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  const student = new Student(studentData);

  if (await Student.isUserExists(student.id)) {
    throw new Error("User already exists.");
  }
  const result = await Student.create(student);

  // if (await student.isUserExists(student.id)) {
  //   throw new Error("User already exists.");
  // }
  // const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
};
