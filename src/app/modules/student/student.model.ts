import { Schema, model } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

import { User } from "../user/user.model";

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, "First name is required"] },
  middleName: { type: String },
  lastName: { type: String, required: [true, "Last name is required"] },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    unique: true,
    ref: User,
  },
  name: { type: userNameSchema, required: [true, "Name is required"] },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "Gender must be either male, female, or other",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: { type: String, required: [true, "Contact number is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "Invalid blood group",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// REMOVE isDeleted = true data from results
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $eq: false } } });
  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
