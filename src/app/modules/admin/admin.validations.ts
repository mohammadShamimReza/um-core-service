import { z } from 'zod';

const create = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'First name is required',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
    }),
    middleName: z.string({
      required_error: 'Middle name is required',
    }),
    profileImage: z.string({
      required_error: 'Profile image is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    contactNo: z.string({
      required_error: 'Contact no is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    bloodGroup: z.string({
      required_error: 'Blood group is required',
    }),
    managementDepartmentId: z.string({
      required_error: 'managementDepartmentId is required',
    }),
    emergencyContactNo: z.string({
      required_error: 'managementDepartmentId is required',
    }),
    dateOfBirth: z.string({
      required_error: 'managementDepartmentId is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    middleName: z.string().optional(),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    managementDepartmentId: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    dateOfBirth: z.string().optional(),
  }),
});

export const AdminValidation = {
  create,
  update,
};
