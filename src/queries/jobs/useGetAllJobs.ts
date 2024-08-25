import { QUERY_KEYS } from '@/constants/queries';
import { getAllJobs } from '@/services/jobs.api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllJobs = (currentPage: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.JOBS, currentPage],
    queryFn: () => getAllJobs(currentPage),
  });

  return { data: data, isLoading };
};
