import { QUERY_KEYS } from '@/constants/queries';
import { getJobDetail } from '@/services/jobs.api';
import { useQuery } from '@tanstack/react-query';

export const useGetJobById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.JOBS_DETAIL, id],
    queryFn: () => getJobDetail(id),
  });

  return { data: data, isLoading };
};
