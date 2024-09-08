'use client';

import { Link } from '@/i18n/routing';
import { useGetJobById } from '@/queries';
import Image from 'next/image';

const CompanyDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const { data: jobInfo } = useGetJobById(id);

  const company = jobInfo?.company;

  return (
    <div className='flex flex-col justify-center items-center gap-3 border border-green-500 p-4 h-[200px] w-full rounded-lg'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL_BACKEND}/images/company/${company?.logo}`}
        alt={company?.name ?? ''}
        width={100}
        height={100}
      />
      <Link href={`/company/${company?._id}`}>{company?.name}</Link>
    </div>
  );
};

export default CompanyDetailPage;
