"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const module_1 = __importDefault(require());
const config_1 = __importDefault(require("../../config"));
const userNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: [true, "First name is required"] },
    middleName: { type: String },
    lastName: { type: String, required: [true, "Last name is required"] },
});
const guardianSchema = new mongoose_1.Schema({
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
const localGuardianSchema = new mongoose_1.Schema({
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
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, "Student ID is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
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
    isActive: {
        type: String,
        enum: {
            values: ["active", "blocked"],
            message: "Status must be either active or blocked",
        },
        default: "active",
        required: [true, "Status is required"],
    },
});
// PRE-HOOK FOR ENCRYPTING/HASHING PASSWORD
studentSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield module_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
studentSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Student.findOne({ id });
        return existingUser;
    });
};
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
