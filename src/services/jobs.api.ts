import { TJob } from '@/types';
import { IBackendRes, IModelPaginate } from '@/types/backend';

import { post, get } from './http';

const pathUrl = '/jobs';

export const getAllJobs = async (currentPage: number) => {
  const results = await get<IBackendRes<IModelPaginate<TJob>>>(
    `${pathUrl}?current=${currentPage}&pageSize=12`,
  );

  return results.data.data;
};

export const createJobs = async (data: Partial<TJob>) => {
  try {
    const results = await post(pathUrl, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};

export const getJobDetail = async (id: string) => {
  const results = await get<IBackendRes<TJob>>(`${pathUrl}/${id}`);

  return results.data.data;
};
