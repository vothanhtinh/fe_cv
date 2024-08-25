import { ICompany, IModelPaginate } from '@/types/backend';

import { post, get } from './http';

const pathUrl = '/companies';

export const getAllCompanies = async () => {
  const results = await get<IModelPaginate<ICompany>>(pathUrl);

  return results.data;
};

export const createCompany = async (data: Partial<ICompany>) => {
  try {
    const results = await post(pathUrl, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};
