import { QUERY_KEYS } from '@/constants/queries';
import { JobSchemas } from '@/schemas/job';
import { getAllJobs } from '@/services/jobs.api';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const schema = z.object({
  result: z.array(JobSchemas),
  meta: z.object({
    current: z.number(),
    pageSize: z.number(),
    pages: z.number(),
    total: z.number(),
  }),
});

export const queryFn = async (currentPage: number) => {
  const results = await getAllJobs(currentPage);

  const data = schema.safeParse(results);

  if (!data.success) {
    return {
      result: [],
      meta: {
        current: 0,
        pageSize: 0,
        pages: 0,
        total: 0,
      },
    };
  }

  return data.data;
};

export const useGetAllJobs = (currentPage: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.JOBS, currentPage],
    queryFn: () => queryFn(currentPage),
  });

  return { data: data, isLoading };
};
