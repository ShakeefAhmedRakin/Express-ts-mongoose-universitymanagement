import Joi from "joi";
import { TUser } from "./user.interface";

// Define Joi validation schema
const userValidationSchema = Joi.object<TUser>({
  password: Joi.string().min(8).messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters long",
  }),
});

export const UserValidation = {
  userValidationSchema,
};
