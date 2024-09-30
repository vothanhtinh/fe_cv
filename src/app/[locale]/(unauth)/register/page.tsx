'use client';
import { useRegisterUser } from '@/queries/auth/useRegister';
import { TUser } from '@/types';
import { Flex, Form, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { WrapperForm } from './styled';

const RegisterPage = () => {
  const { mutation } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      gender: '',
      address: '',
    },
  });

  const onFinish = async (values: TUser) => {
    const { name, email, password, age, gender, address } = values;
    await mutation.mutateAsync({ name, email, password, age, gender, address });
  };

  const onSubmit = handleSubmit(onFinish);

  return (
    <WrapperForm className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            fill
            alt=''
            src='https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </aside>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <span className='block text-green-500'>
              <span className='sr-only'>Home</span>
              <svg
                className='h-8 sm:h-10'
                viewBox='0 0 28 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='...' fill='currentColor' />
              </svg>
            </span>

            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
              Welcome to TopCV 🦑
            </h1>

            <form
              className='mt-8 grid grid-cols-12 gap-10 '
              onSubmit={onSubmit}
            >
              <div className='col-span-12 sm:col-span-12'>
                <Form.Item
                  label='Họ và tên'
                  validateStatus={errors.name ? 'error' : ''}
                  help={errors.name ? errors.name.message : null}
                >
                  <Input
                    id='Name'
                    {...register('name', {
                      required: 'Vui lòng nhập họ và tên',
                    })}
                    className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </Form.Item>
              </div>

              <div className='col-span-12 sm:col-span-12'>
                <Form.Item
                  label='Email'
                  validateStatus={errors.email ? 'error' : ''}
                  help={errors.email ? errors.email.message : null}
                >
                  <Input
                    type='email'
                    id='Email'
                    {...register('email', {
                      required: 'Vui lòng nhập đúng địa chỉ email',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Vui lòng nhập đúng địa chỉ email',
                      },
                    })}
                    className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </Form.Item>
              </div>

              <div className='col-span-12 sm:col-span-12'>
                <Form.Item
                  label='Password'
                  validateStatus={errors.password ? 'error' : ''}
                  help={errors.password ? errors.password.message : null}
                >
                  <Input
                    type='password'
                    id='Password'
                    {...register('password', {
                      required: 'Vui lòng nhập mật khẩu',
                      minLength: {
                        value: 6,
                        message: 'Password tối thiểu 6 kí tự',
                      },
                    })}
                    className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </Form.Item>
              </div>
              <div className='col-span-6 sm:col-span-6'>
                <Form.Item
                  label='Địa chỉ'
                  validateStatus={errors.address ? 'error' : ''}
                  help={errors.address ? errors.address.message : null}
                >
                  <Input
                    id='Address'
                    {...register('address', {
                      required: 'Vui lòng nhập địa chỉ',
                    })}
                    className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </Form.Item>
              </div>
              <div className='col-span-6 sm:col-span-6'>
                <Form.Item
                  label='Tuổi'
                  validateStatus={errors.age ? 'error' : ''}
                  help={errors.age ? errors.age.message : null}
                >
                  <Input
                    id='Age'
                    {...register('age', {
                      required: 'Vui lòng nhập tuổi',
                    })}
                    className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </Form.Item>
              </div>

              <div className='col-span-12 sm:flex sm:items-center sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 rounded-md border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500'
                >
                  Tạo tài khoản
                </button>

                <Flex gap={10} className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  Bạn đã có tài khoản?
                  <Link
                    href='/login'
                    className='text-gray-700 hover:text-green-500 '
                  >
                    Đăng nhập
                  </Link>
                </Flex>
              </div>
            </form>
          </div>
        </main>
      </div>
    </WrapperForm>
  );
};

export default RegisterPage;
