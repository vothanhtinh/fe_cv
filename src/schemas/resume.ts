import { z } from 'zod';

export const ResumeSchema = z.object({
  _id: z.string(),
  email: z.string().email(),
  userId: z.string(),
  url: z.string(),
  status: z.string(),
  companyId: z.union([
    z.string(),
    z.object({
      _id: z.string(),
      name: z.string(),
      logo: z.string(),
    }),
  ]),
  jobId: z.union([
    z.string(),
    z.object({
      _id: z.string(),
      name: z.string(),
    }),
  ]),
  history: z
    .array(
      z.object({
        status: z.string(),
        updatedAt: z.string(),
        updatedBy: z.object({
          _id: z.string(),
          email: z.string().email(),
        }),
      }),
    )
    .optional(),
  createdBy: z.string().optional(),
  isDeleted: z.boolean().optional(),
  deletedAt: z.union([z.boolean(), z.null()]).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
