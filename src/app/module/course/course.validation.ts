import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    code: z.string({ required_error: 'code is required' }),
    credit: z.number({ required_error: 'credit is required' }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    credit: z.number().optional(),
  }),
});

const assignOrRemoveFaculties = z.object({
  body: z.object({
    faculties: z.array(z.string(), {
      required_error: 'Courses are required',
    }),
  }),
});

export const CourseValidation = {
  create,
  update,
  assignOrRemoveFaculties,
};
