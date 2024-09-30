import { z } from 'zod';

export const SubscribersSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  skills: z.array(z.string()),
  createdBy: z.string().optional(),
  isDeleted: z.boolean().optional(),
  deletedAt: z.union([z.boolean(), z.null()]).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
