import { Flex, Result } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/atoms';

export default function NotFound() {
  return (
    <Flex
      style={{ height: 'calc( 100vh - 145px)' }}
      className=''
      justify='center'
      align='center'
    >
      <Result
        icon={
          <Image src='/notFoundPage.jpg' alt='404' width={400} height={400} />
        }
        title='404'
        subTitle='Không tìm thấy trang này'
        extra={
          <Link href='/'>
            <Button type='primary'>Quay về trang chủ</Button>
          </Link>
        }
      />
    </Flex>
  );
}
