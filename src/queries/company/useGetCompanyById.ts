import { QUERY_KEYS } from '@/constants/queries';
import { getCompanyDetail } from '@/services/company.api';
import { useQuery } from '@tanstack/react-query';

export const useGetCompanyById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.COMPANY_DETAIL, id],
    queryFn: () => getCompanyDetail(id),
  });

  return { data: data, isLoading };
};
