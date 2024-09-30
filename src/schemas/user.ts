import { z } from 'zod';

export const ownerSchema = z.object({
  _id: z.string(),
  email: z.string(),
});

export const AccountSchema = z.object({
  access_token: z.string(),
  user: z.object({
    _id: z.string(),
    role: z.string(),
    email: z.string().email(),
    name: z.string(),
  }),
});

export const GetAccountSchema = AccountSchema.omit({
  access_token: true,
});

export const UserSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  age: z.coerce.number(),
  gender: z.string(),
  address: z.string(),
  role: z.string().optional(),
  company: z
    .object({
      _id: z.string(),
      name: z.string(),
    })
    .optional(),
  createdBy: z.string().optional(),
  isDeleted: z.boolean().optional(),
  deletedAt: z.union([z.boolean(), z.null()]).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
