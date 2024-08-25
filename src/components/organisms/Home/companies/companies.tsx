'use client';
import { useGetAllCompanies } from '@/queries';

import { SwiperSlider } from '@/components/molecules/components';

import { Company } from './components/company';

export const Companies = () => {
  const { data } = useGetAllCompanies();

  return (
    <div className='w-full p-4'>
      <SwiperSlider
        data={
          data?.result.map((item) => ({
            id: item?._id,
            content: () => <Company {...item} />,
          })) ?? []
        }
        title='Companies'
      />
    </div>
  );
};
