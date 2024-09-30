import { QUERY_KEYS } from '@/constants';
import { callUpdateSubscriber } from '@/services/account.api';
import { TUser } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useUpdateSubscribleSkills = (user: TUser) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: Partial<TUser>) => callUpdateSubscriber(data),

    onSuccess: () => {
      toast.success('Cập nhật thông tin thành công');
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SUBSCRIBER_SKILLS, user._id],
      });
    },
  });

  return mutation;
};
