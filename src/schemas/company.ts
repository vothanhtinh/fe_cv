import { z } from 'zod';

export const CompanySchemas = z.object({
  _id: z.string(),
  name: z.string(),
  address: z.string().optional(),
  description: z.string().optional(),
  createdBy: z.string().optional(),
  isDeleted: z.boolean().optional(),
  deletedAt: z.boolean().nullable().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  logo: z.string().optional(),
});
