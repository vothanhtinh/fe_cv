// Libraries

// Constants
import { QUERY_KEYS } from '@/constants/queries';
import { callFetchSubscriberSkill } from '@/services/account.api';
import { TUser } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetSubscriberSkills = (userId: TUser['_id']) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.SUBSCRIBER_SKILLS, userId],
    queryFn: () => {
      return callFetchSubscriberSkill(userId);
    },
  });

  return { data: data, isLoading };
};
