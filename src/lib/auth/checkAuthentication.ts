import { ROLE } from '@/constants';
import { getCookie } from 'cookies-next';
import { decodeJwt } from 'jose';

export const checkAuthentication = () => {
  const accessToken = getCookie('access_token');

  if (!accessToken) {
    return false;
  }

  return true;
};

export const checkIsRoleAdmin = () => {
  const accessToken = getCookie('access_token');

  if (!accessToken) {
    return false;
  }

  const { role }: { exp: number; role: { name: string } } =
    decodeJwt(accessToken);

  return role.name !== ROLE.SUPER_ADMIN;
};
