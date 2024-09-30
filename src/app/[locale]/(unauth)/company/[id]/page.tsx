import { TCompany } from '@/types';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import Image from 'next/image';

import { BlockContent } from '@/components/molecules/components';

const JobDetailPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/api/v1/companies/${id}`,
  );
  const response = await data.json();

  const companyInfo: TCompany = response.data;

  const { name, logo, description, address } = companyInfo;

  return (
    <>
      <section className='overflow-hidden bg-[url(/bg-company.webp)] bg-cover bg-top bg-no-repeat rounded-[10px]'>
        <div className='bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='text-left ltr:sm:text-left rtl:sm:text-right'>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_BACKEND}/images/company/${logo}`}
              alt={name ?? ''}
              width={100}
              height={100}
            />

            <h2 className='mt-4 text-2xl font-bold text-white sm:text-2xl md:text-3xl'>
              {name}
            </h2>
          </div>
        </div>
      </section>
      <Flex gap={100} className='mt-8'>
        <Flex flex={2} vertical gap={20}>
          <BlockContent title='Giới thiệu công ty'>
            <div dangerouslySetInnerHTML={{ __html: description ?? '' }}></div>
          </BlockContent>
          <BlockContent title='Tuyển dụng'>Tuyển dụng</BlockContent>
        </Flex>
        <Flex flex={1}>
          <BlockContent title='Thông tin liên hệ'>
            <Flex gap={10} vertical>
              <Flex gap={10}>
                <EnvironmentOutlined className='text-green-500  ' />
                <span>Địa chỉ công ty</span>
              </Flex>
              <Flex>{address}</Flex>
            </Flex>
          </BlockContent>
        </Flex>
      </Flex>
    </>
  );
};

export default JobDetailPage;
