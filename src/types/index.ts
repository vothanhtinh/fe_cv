import { CompanySchemas } from '@/schemas/company';
import { JobSchemas } from '@/schemas/job';
import { ResumeSchema } from '@/schemas/resume';
import { SubscribersSchema } from '@/schemas/subscriber';
import { AccountSchema, GetAccountSchema, UserSchema } from '@/schemas/user';
import { z } from 'zod';

export type TJob = z.infer<typeof JobSchemas>;

export type TCompany = z.infer<typeof CompanySchemas>;

export type TAccount = z.infer<typeof AccountSchema>;

export type TGetAccount = z.infer<typeof GetAccountSchema>;

export type TUser = z.infer<typeof UserSchema>;

export type TResume = z.infer<typeof ResumeSchema>;

export type TSubscribers = z.infer<typeof SubscribersSchema>;
