/* eslint-disable @typescript-eslint/no-explicit-any */
// Libraries
import { callRegisterUser } from '@/services/auth.api';
import { useMutation } from '@tanstack/react-query';
import { message, notification } from 'antd';

// services

export const useRegisterUser = () => {
  const mutation = useMutation({
    mutationFn: async (user: any) => callRegisterUser(user),
    onSuccess: (data: any) => {
      if (data?.data?._id) {
        message.success('Đăng ký tài khoản thành công!');
        window.location.href = '/login';
      } else {
        notification.error({
          message: 'Có lỗi xảy ra',
          description:
            data.message && Array.isArray(data.message)
              ? data.message[0]
              : data.data.message,
          duration: 5,
        });
      }
    },

    onError() {},
  });

  return {
    mutation,
    isLoading: mutation.isPending,
  };
};
