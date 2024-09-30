// Libraries
import { QUERY_KEYS } from '@/constants/queries';
import { updateUser } from '@/services/user.api';
import { TUser } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (user: TUser) => updateUser(user),

    onSuccess: () => {
      toast.success('Cập nhật thông tin thành công');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
    },
  });

  return mutation;
};
