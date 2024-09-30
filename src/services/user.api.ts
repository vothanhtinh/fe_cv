import { TUser } from '@/types';
import { IModelPaginate } from '@/types/backend';

import { post, remove, get } from './http';

const pathUrl = '/users';

export const getUsers = async () => {
  const results = await get<IModelPaginate<TUser>>(pathUrl);

  return results;
};

export const createUser = async (data: Partial<TUser>) => {
  try {
    const results = await post(pathUrl, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};

export const updateUser = async (data: Partial<TUser>) => {
  try {
    const results = await post(`${pathUrl}`, data);

    return results;
  } catch (error) {
    // console.log(error);
  }
};

export const deleteUser = async (data: Partial<TUser>) => {
  try {
    const results = await remove(`/user/${data}`);

    return results;
  } catch (error) {
    // console.log(error);
  }
};
