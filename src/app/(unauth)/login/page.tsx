/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useLoginUser } from '@/queries/auth';
import { Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { SidebarRight } from './styled';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { mutation, isLoading } = useLoginUser();
  const user = useSelector((state: any) => state.userSlice.user);

  const router = useRouter();

  useEffect(() => {
    if (user?._id !== '') {
      router.replace('/');
    }
  }, [router, user?._id]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: FormValues) => {
    const { email, password } = formData;

    await mutation.mutateAsync({ username: email, password });
  };

  return (
    <section className='w-full flex items-center gap-8  h-screen '>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Bắt đầu với TopCV
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                  })}
                />
                {errors.email && (
                  <p className='text-red-500  text-[11px]'>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  type='password'
                  autoComplete='current-password'
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6'
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  })}
                />
                {errors.password && (
                  <p className='text-red-500 text-[11px]'>
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className=' w-full border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-500  focus:outline-none focus:ring active:text-green-500 rounded-lg'
              >
                {isLoading ? <Spin spinning={isLoading} /> : 'Đăng nhập'}
              </button>

              <p className='mt-10 text-center text-sm text-gray-500'>
                Bạn chưa có tài khoản?{' '}
                <Link
                  href={'/register'}
                  className='font-semibold leading-6 text-green-600 hover:text-green-500'
                >
                  Đăng ký
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <SidebarRight>
        <div className='absolute top-1/4 pl-8'>
          <Link href={'/'}>
            <Image
              src={'/topcv_white.webp'}
              width={160}
              height={70}
              alt={'topcv'}
            />
          </Link>
        </div>
      </SidebarRight>
    </section>
  );
}
