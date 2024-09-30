import { TSubscribers, TUser } from '@/types';
import { IBackendRes } from '@/types/backend';

import { post, put } from './http';

export const callFetchResumeByUser = async (user: TUser['_id']) => {
  const result = await post('/resumes/by-user', user);

  return result.data;
};

export const callFetchSubscriberSkill = async (id: TUser['_id']) => {
  const result = await post<IBackendRes<TSubscribers>>(
    '/subscribers/skills',
    id,
  );

  return result.data.data;
};

export const callUpdateSubscriber = async (data: Partial<TUser>) => {
  const result = await put('/subscribers', data);

  return result.data;
};
