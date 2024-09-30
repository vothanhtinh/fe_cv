// Libraries

// Constants
import { QUERY_KEYS } from '@/constants/queries';
import { callFetchResumeByUser } from '@/services/account.api';
import { TUser } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useFetchResumeByUser = (userId: TUser['_id']) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.RESUME_BY_USER, userId],
    queryFn: () => {
      return callFetchResumeByUser(userId);
    },
  });

  return { data: data, isLoading };
};
