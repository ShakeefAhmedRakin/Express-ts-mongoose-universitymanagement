import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.base": "First name must be a string",
    "string.empty": "First name is required",
    "any.required": "First name is required",
  }),
  middleName: Joi.string().trim().optional().messages({
    "string.base": "Middle name must be a string",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.base": "Last name must be a string",
    "string.empty": "Last name is required",
    "any.required": "Last name is required",
  }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    "string.base": "Father's name must be a string",
    "string.empty": "Father's name is required",
    "any.required": "Father's name is required",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    "string.base": "Father's occupation must be a string",
    "string.empty": "Father's occupation is required",
    "any.required": "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    "string.base": "Father's contact number must be a string",
    "string.empty": "Father's contact number is required",
    "any.required": "Father's contact number is required",
  }),
  motherName: Joi.string().trim().required().messages({
    "string.base": "Mother's name must be a string",
    "string.empty": "Mother's name is required",
    "any.required": "Mother's name is required",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    "string.base": "Mother's occupation must be a string",
    "string.empty": "Mother's occupation is required",
    "any.required": "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().trim().required().messages({
    "string.base": "Mother's contact number must be a string",
    "string.empty": "Mother's contact number is required",
    "any.required": "Mother's contact number is required",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.base": "Local guardian's name must be a string",
    "string.empty": "Local guardian's name is required",
    "any.required": "Local guardian's name is required",
  }),
  occupation: Joi.string().trim().required().messages({
    "string.base": "Local guardian's occupation must be a string",
    "string.empty": "Local guardian's occupation is required",
    "any.required": "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().trim().required().messages({
    "string.base": "Local guardian's contact number must be a string",
    "string.empty": "Local guardian's contact number is required",
    "any.required": "Local guardian's contact number is required",
  }),
  address: Joi.string().trim().required().messages({
    "string.base": "Local guardian's address must be a string",
    "string.empty": "Local guardian's address is required",
    "any.required": "Local guardian's address is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    "string.base": "Student ID must be a string",
    "string.empty": "Student ID is required",
    "any.required": "Student ID is required",
  }),
  password: Joi.string().trim().required().min(8).messages({
    "any.required": "Password is required",
    "string.min": "Password must be at least 8 characters long",
  }),
  name: userNameValidationSchema,
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only": "Gender must be either male, female, or other",
    "string.base": "Gender must be a string",
    "any.required": "Gender is required",
  }),
  dateOfBirth: Joi.string().required().messages({
    "string.base": "Date of birth must be a string",
    "any.required": "Date of birth is required",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  contactNo: Joi.string().trim().required().messages({
    "string.base": "Contact number must be a string",
    "string.empty": "Contact number is required",
    "any.required": "Contact number is required",
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    "string.base": "Emergency contact number must be a string",
    "string.empty": "Emergency contact number is required",
    "any.required": "Emergency contact number is required",
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .messages({
      "any.only": "Invalid blood group",
    }),
  presentAddress: Joi.string().trim().required().messages({
    "string.base": "Present address must be a string",
    "string.empty": "Present address is required",
    "any.required": "Present address is required",
  }),
  permanentAddress: Joi.string().trim().required().messages({
    "string.base": "Permanent address must be a string",
    "string.empty": "Permanent address is required",
    "any.required": "Permanent address is required",
  }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: Joi.string().optional().messages({
    "string.base": "Profile image URL must be a string",
  }),
  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": "Status must be either active or blocked",
  }),
  isDeleted: Joi.bool(),
});

export default studentValidationSchema;
