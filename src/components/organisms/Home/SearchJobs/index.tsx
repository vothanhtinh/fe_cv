import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Divider, Flex, Input } from 'antd';
import Text from 'antd/lib/typography/Text';
import Image from 'next/image';

import { Button } from '@/components/atoms';
export default async function SearchJobs() {
  const data = await fetch('https://vapi.vnappmob.com/api/province');
  const res = await data.json();

  const provinces = res.results;

  return (
    <div className='relative h-[300px] flex flex-col items-center '>
      <Image src='/bg_header.webp' alt='banner' fill={true} />

      <div className='absolute flex items-center bg-white p-2 bottom-10 w-[620px] container rounded-lg'>
        <SearchOutlined className='text-[20px] text-[#6f7882]' />
        <Input
          placeholder='Vị trí ứng tuyển'
          className='w-[300px] min-w-[300px] p-2 rounded-md border-none focus:border-none focus:shadow-none'
        />
        <Divider type='vertical' className='bg-[#dee0e2] h-[32px] ' />

        <Flex gap='10px' className='pr-1 w-[170px] overflow-hidden'>
          <EnvironmentOutlined />
          <Text ellipsis={true}>{provinces[0].province_name}</Text>
        </Flex>
        <Button>Tìm kiếm</Button>
      </div>
    </div>
  );
}
