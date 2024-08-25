/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useLogoutUser } from '@/queries/auth/useLogout';
import { setLogoutAction } from '@/store/slices/userSlice';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BorderBeam } from '@/components/atoms/BorderBem';

import { HeaderWrapper, NavbarItem, StyledMenu } from './styled';

const itemsNav: MenuProps['items'] = [
  {
    label: <Link href='/jobs'>Việc làm</Link>,
    key: 'job',
  },
  {
    label: 'Hồ sơ & CV',
    key: 'cv',
  },
  {
    label: 'Công ty',
    key: 'company',
  },
  {
    label: 'Phát triển sự nghiệp',
    key: 'growth',
  },
  {
    label: 'Công cụ',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const { mutation } = useLogoutUser();
  const user = useSelector((state: any) => state.userSlice.user);
  const handleLogoutUser = () => {
    dispatch(setLogoutAction());
    mutation.mutate();
    window.location.href = '/';
  };

  const items = [
    {
      label: (
        <label
          style={{ cursor: 'pointer' }}
          onClick={() => setShowManageAccount(true)}
        >
          Quản lý tài khoản
        </label>
      ),
      key: 'account',
    },

    {
      label: (
        <div style={{ cursor: 'pointer' }} onClick={handleLogoutUser}>
          Đăng xuất
        </div>
      ),
      key: 'logout',
    },
  ];
  const [current, setCurrent] = useState('');
  const [showManageAccount, setShowManageAccount] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <HeaderWrapper className='flex bg-white px-10 items-center h-[80px] overflow-hidden'>
      <Link href={'/'}>
        <Image
          src={'/topcv-logo-6.webp'}
          width={200}
          height={78}
          alt='logo'
          className='h-[80px] min-w-[120px]'
          style={{ objectFit: 'contain' }}
        />
      </Link>
      <StyledMenu
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={itemsNav}
        className='w-full font-medium'
      />
      <ul className='flex gap-3'>
        {!user?.email ? (
          <>
            <NavbarItem>
              <Link
                href={'/login'}
                className=' relative text-green-500 border-solid border hover:bg-green-100 '
              >
                Đăng nhập
                <BorderBeam size={40} borderWidth={2} />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={'/register'}
                className='text-white  bg-green-500 hover:opacity-80  '
              >
                <span>Đăng ký</span>
              </Link>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Link
                href={'/'}
                className='text-white bg-slate-950 hover:opacity-80'
              >
                Đăng tuyển hồ sơ
              </Link>
            </NavbarItem>
            <Dropdown menu={{ items }} trigger={['click']}>
              <Space>
                <UserOutlined />
              </Space>
            </Dropdown>
          </>
        )}
      </ul>
    </HeaderWrapper>
  );
}
