// Libraries
import { callLogoutUser } from '@/services/auth.api';
import { useMutation } from '@tanstack/react-query';

// services

export const useLogoutUser = () => {
  const mutation = useMutation({
    mutationFn: async () => callLogoutUser(),
    onSuccess: () => {},

    onError() {},
  });

  return {
    mutation,
    isLoading: mutation.isPending,
  };
};
