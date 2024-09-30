import { z } from 'zod';

import { ownerSchema } from './user';

// Define the JobSchemas using zod
export const JobSchemas = z.object({
  _id: z.string(),
  name: z.string(),
  skills: z.array(z.string()),
  company: z.object({
    _id: z.string(),
    name: z.string(),
    logo: z.string().optional(),
  }),
  location: z.string(),
  salary: z.number(),
  quantity: z.number(),
  level: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  isActive: z.boolean(),
  createdBy: ownerSchema, // referencing ownerSchema from 'user' module
  isDeleted: z.boolean().optional(),
  deletedAt: z.boolean().nullable().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
