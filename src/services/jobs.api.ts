import { IJob, IModelPaginate } from '@/types/backend';

import { post, get } from './http';

const pathUrl = '/jobs';

export const getAllJobs = async (currentPage: number) => {
  const results = await get<IModelPaginate<IJob>>(
    `${pathUrl}?current=${currentPage}&pageSize=12`,
  );

  return results;
};

export const createJobs = async (data: Partial<IJob>) => {
  try {
    const results = await post(pathUrl, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};

export const getJobDetail = async (id: string) => {
  const results = await get<IJob>(`${pathUrl}/${id}`);

  return results.data;
};
