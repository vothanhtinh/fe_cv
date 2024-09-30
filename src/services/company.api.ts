import { TCompany } from '@/types';
import { IBackendRes, IModelPaginate } from '@/types/backend';

import { post, get } from './http';

const pathUrl = '/companies';

export const getAllCompanies = async () => {
  const results = await get<IBackendRes<IModelPaginate<TCompany>>>(pathUrl);

  return results.data.data;
};

export const createCompany = async (data: Partial<TCompany>) => {
  try {
    const results = await post(pathUrl, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};

export const getCompanyDetail = async (id: string) => {
  const results = await get<IBackendRes<TCompany>>(`${pathUrl}/${id}`);

  return results.data;
};
