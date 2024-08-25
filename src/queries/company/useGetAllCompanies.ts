// Libraries

// Constants

import { QUERY_KEYS } from '@/constants/queries';
import { getAllCompanies } from '@/services/company.api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCompanies = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.COMPANIES],
    queryFn: () => getAllCompanies(),
  });

  return { data: data, isLoading };
};
