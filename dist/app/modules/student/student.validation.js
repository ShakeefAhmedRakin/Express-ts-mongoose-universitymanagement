"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userNameValidationSchema = joi_1.default.object({
    firstName: joi_1.default.string().trim().required().messages({
        "string.base": "First name must be a string",
        "string.empty": "First name is required",
        "any.required": "First name is required",
    }),
    middleName: joi_1.default.string().trim().optional().messages({
        "string.base": "Middle name must be a string",
    }),
    lastName: joi_1.default.string().trim().required().messages({
        "string.base": "Last name must be a string",
        "string.empty": "Last name is required",
        "any.required": "Last name is required",
    }),
});
const guardianValidationSchema = joi_1.default.object({
    fatherName: joi_1.default.string().trim().required().messages({
        "string.base": "Father's name must be a string",
        "string.empty": "Father's name is required",
        "any.required": "Father's name is required",
    }),
    fatherOccupation: joi_1.default.string().trim().required().messages({
        "string.base": "Father's occupation must be a string",
        "string.empty": "Father's occupation is required",
        "any.required": "Father's occupation is required",
    }),
    fatherContactNo: joi_1.default.string().trim().required().messages({
        "string.base": "Father's contact number must be a string",
        "string.empty": "Father's contact number is required",
        "any.required": "Father's contact number is required",
    }),
    motherName: joi_1.default.string().trim().required().messages({
        "string.base": "Mother's name must be a string",
        "string.empty": "Mother's name is required",
        "any.required": "Mother's name is required",
    }),
    motherOccupation: joi_1.default.string().trim().required().messages({
        "string.base": "Mother's occupation must be a string",
        "string.empty": "Mother's occupation is required",
        "any.required": "Mother's occupation is required",
    }),
    motherContactNo: joi_1.default.string().trim().required().messages({
        "string.base": "Mother's contact number must be a string",
        "string.empty": "Mother's contact number is required",
        "any.required": "Mother's contact number is required",
    }),
});
const localGuardianValidationSchema = joi_1.default.object({
    name: joi_1.default.string().trim().required().messages({
        "string.base": "Local guardian's name must be a string",
        "string.empty": "Local guardian's name is required",
        "any.required": "Local guardian's name is required",
    }),
    occupation: joi_1.default.string().trim().required().messages({
        "string.base": "Local guardian's occupation must be a string",
        "string.empty": "Local guardian's occupation is required",
        "any.required": "Local guardian's occupation is required",
    }),
    contactNo: joi_1.default.string().trim().required().messages({
        "string.base": "Local guardian's contact number must be a string",
        "string.empty": "Local guardian's contact number is required",
        "any.required": "Local guardian's contact number is required",
    }),
    address: joi_1.default.string().trim().required().messages({
        "string.base": "Local guardian's address must be a string",
        "string.empty": "Local guardian's address is required",
        "any.required": "Local guardian's address is required",
    }),
});
const studentValidationSchema = joi_1.default.object({
    id: joi_1.default.string().trim().required().messages({
        "string.base": "Student ID must be a string",
        "string.empty": "Student ID is required",
        "any.required": "Student ID is required",
    }),
    password: joi_1.default.string().trim().required().min(8).messages({
        "any.required": "Password is required",
        "string.min": "Password must be at least 8 characters long",
    }),
    name: userNameValidationSchema,
    gender: joi_1.default.string().valid("male", "female", "other").required().messages({
        "any.only": "Gender must be either male, female, or other",
        "string.base": "Gender must be a string",
        "any.required": "Gender is required",
    }),
    dateOfBirth: joi_1.default.string().required().messages({
        "string.base": "Date of birth must be a string",
        "any.required": "Date of birth is required",
    }),
    email: joi_1.default.string().trim().email().required().messages({
        "string.base": "Email must be a string",
        "string.email": "Invalid email address",
        "string.empty": "Email is required",
        "any.required": "Email is required",
    }),
    contactNo: joi_1.default.string().trim().required().messages({
        "string.base": "Contact number must be a string",
        "string.empty": "Contact number is required",
        "any.required": "Contact number is required",
    }),
    emergencyContactNo: joi_1.default.string().trim().required().messages({
        "string.base": "Emergency contact number must be a string",
        "string.empty": "Emergency contact number is required",
        "any.required": "Emergency contact number is required",
    }),
    bloodGroup: joi_1.default.string()
        .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
        .optional()
        .messages({
        "any.only": "Invalid blood group",
    }),
    presentAddress: joi_1.default.string().trim().required().messages({
        "string.base": "Present address must be a string",
        "string.empty": "Present address is required",
        "any.required": "Present address is required",
    }),
    permanentAddress: joi_1.default.string().trim().required().messages({
        "string.base": "Permanent address must be a string",
        "string.empty": "Permanent address is required",
        "any.required": "Permanent address is required",
    }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: joi_1.default.string().optional().messages({
        "string.base": "Profile image URL must be a string",
    }),
    isActive: joi_1.default.string().valid("active", "blocked").default("active").messages({
        "any.only": "Status must be either active or blocked",
    }),
});
exports.default = studentValidationSchema;
