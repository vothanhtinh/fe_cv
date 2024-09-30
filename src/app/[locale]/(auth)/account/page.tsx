'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

import { Tabs } from '@/components/atoms';
import { SpreadCv, SubscriberSkills } from '@/components/organisms';

export default function Account() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tab = searchParams.get('tab') ?? 'spread-cv';

  const tabItems = [
    {
      key: 'spread-cv',
      label: 'Rải CV',
      children: <SpreadCv />,
    },
    {
      key: 'subscribers-skills',
      label: 'Nhận Jobs qua Email',
      children: <SubscriberSkills />,
    },
    {
      key: '3',
      label: 'Cập nhật thông tin',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div>
      <section className='bg-white text-black dark:bg-gray-900 '>
        <div className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
          <Tabs
            defaultActiveKey={'spread-cv'}
            activeKey={tab}
            items={tabItems}
            size='large'
            onChange={(key) => router.push(`/account?tab=${key}`)}
          />
        </div>
      </section>
    </div>
  );
}
