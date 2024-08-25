// Libraries

// Constants
import { QUERY_KEYS } from '@/constants/queries';
import { callGetInfoUser } from '@/services/auth.api';
import { useQuery } from '@tanstack/react-query';

export const useGetProfileAccount = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: callGetInfoUser,
  });

  return { data: data, isLoading };
};
