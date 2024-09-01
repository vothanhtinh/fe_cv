import { ICompany } from '@/types/backend';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { Wrapper } from './styled';

const { Paragraph } = Typography;
export const Company = (props: ICompany) => {
  const { logo, name } = props;

  return (
    <Wrapper className='w-full  p-4 bg-white border border-green-500  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 rounded-lg'>
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
