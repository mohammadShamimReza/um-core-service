"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({
            required_error: 'First name is required',
        }),
        lastName: zod_1.z.string({
            required_error: 'Last name is required',
        }),
        middleName: zod_1.z.string({
            required_error: 'Middle name is required',
        }),
        profileImage: zod_1.z.string({
            required_error: 'Profile image is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact no is required',
        }),
        gender: zod_1.z.string({
            required_error: 'Gender is required',
        }),
        bloodGroup: zod_1.z.string({
            required_error: 'Blood group is required',
        }),
        managementDepartmentId: zod_1.z.string({
            required_error: 'managementDepartmentId is required',
        }),
        emergencyContactNo: zod_1.z.string({
            required_error: 'managementDepartmentId is required',
        }),
        dateOfBirth: zod_1.z.string({
            required_error: 'managementDepartmentId is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
        middleName: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        gender: zod_1.z.string().optional(),
        bloodGroup: zod_1.z.string().optional(),
        managementDepartmentId: zod_1.z.string().optional(),
        emergencyContactNo: zod_1.z.string().optional(),
        dateOfBirth: zod_1.z.string().optional(),
    }),
});
exports.AdminValidation = {
    create,
    update,
};
