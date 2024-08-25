// Libraries

// Constants
import { QUERY_KEYS } from '@/constants/queries';
import { getUsers } from '@/services/user.api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: getUsers,
  });

  return { data: data, isLoading };
};
