'use client';
import { useRegisterUser } from '@/queries/auth/useRegister';
import { IUser } from '@/types/backend';
import { Button, Divider, Form, Input, Select } from 'antd';
import Link from 'next/link';

import { WrapperForm, WrapperRegister } from './styled';

// Types

const { Option } = Select;

const RegisterPage = () => {
  const { mutation } = useRegisterUser();

  const onFinish = async (values: IUser) => {
    const { name, email, password, age, gender, address } = values;

    await mutation.mutateAsync({ name, email, password, age, gender, address });
  };

  return (
    <WrapperRegister className='p-4 '>
      <WrapperForm>
        <div>
          <h2 className='text-center text-green-500'>Đăng Ký Tài Khoản</h2>
          <Divider />
        </div>
        <Form<IUser> name='basic' onFinish={onFinish} autoComplete='off'>
          <Form.Item
            labelCol={{ span: 24 }}
            label='Họ tên'
            name='name'
            rules={[{ required: true, message: 'Họ tên không được để trống!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Email không được để trống!' }]}
          >
            <Input type='email' />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label='Mật khẩu'
            name='password'
            rules={[
              { required: true, message: 'Mật khẩu không được để trống!' },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label='Tuổi'
            name='age'
            rules={[{ required: true, message: 'Tuổi không được để trống!' }]}
          >
            <Input type='number' />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            name='gender'
            label='Giới tính'
            rules={[
              { required: true, message: 'Giới tính không được để trống!' },
            ]}
          >
            <Select allowClear>
              <Option value='male'>Nam</Option>
              <Option value='female'>Nữ</Option>
              <Option value='other'>Khác</Option>
            </Select>
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label='Địa chỉ'
            name='address'
            rules={[
              { required: true, message: 'Địa chỉ không được để trống!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className='flex justify-center'>
            <Button htmlType='submit'>Đăng ký</Button>
          </Form.Item>
          <Divider> Or </Divider>
          <p className='text text-normal flex justify-center'>
            Đã có tài khoản ?
            <span>
              <Link href='/login'> Đăng Nhập </Link>
            </span>
          </p>
        </Form>
      </WrapperForm>
    </WrapperRegister>
  );
};

export default RegisterPage;
