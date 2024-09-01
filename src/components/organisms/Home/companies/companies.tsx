'use client';
import { useGetAllCompanies } from '@/queries';

import { SwiperSlider } from '@/components/molecules/components';

import { Company } from './components/company';

export const Companies = () => {
  const { data } = useGetAllCompanies();

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
      <SwiperSlider
        data={
          data?.result.map((item) => ({
            id: item?._id,
            content: () => <Company {...item} />,
          })) ?? []
        }
        title={
          <h2 className='text-green-500 text-xl font-bold sm:text-2xl mb-4'>
            Top công ty nổi bật
          </h2>
        }
      />
    </div>
  );
};
