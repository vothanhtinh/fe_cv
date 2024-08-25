import { ICompany } from '@/types/backend';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { Wrapper } from './styled';

const { Paragraph } = Typography;
export const Company = (props: ICompany) => {
  const { logo, name } = props;

  return (
    <Wrapper className='w-full  p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
      <Flex justify='center' align='center'>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL_BACKEND}/images/company/${logo}`}
          alt='product image'
          width={100}
          height={100}
          style={{
            objectFit: 'contain',
          }}
          className='h-[100px] w-[100px]'
        />
      </Flex>
      <Paragraph className='text-center tracking-tight text-gray-900 dark:text-white mt-2'>
        {name}
      </Paragraph>
    </Wrapper>
  );
};
