// Libraries

// Constants

import { QUERY_KEYS } from '@/constants/queries';
import { CompanySchemas } from '@/schemas/company';
import { getAllCompanies } from '@/services/company.api';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const schema = z.object({
  result: z.array(CompanySchemas),
  meta: z.object({
    current: z.number(),
    pageSize: z.number(),
    pages: z.number(),
    total: z.number(),
  }),
});

export const queryFn = async () => {
  const results = await getAllCompanies();

  const data = schema.safeParse(results);

  if (data.success) {
    return data.data;
  }

  return {
    result: [],
    meta: {
      current: 0,
      pageSize: 0,
      pages: 0,
      total: 0,
    },
  };
};

export const useGetAllCompanies = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.COMPANIES],
    queryFn: () => queryFn(),
  });

  return { data: data, isLoading };
};
