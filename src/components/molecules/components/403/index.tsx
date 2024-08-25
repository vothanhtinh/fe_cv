'use client';
import { Button, Result } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NoAccess() {
  const router = useRouter();

  const onClickBackHome = () => {
    router.push('/');
  };

  return (
    <Result
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={
        <Button type='primary' onClick={onClickBackHome}>
          Back Home
        </Button>
      }
    />
  );
}
