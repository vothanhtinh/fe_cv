import { Flex } from 'antd';

export default function Layout({
  children,
  company,
}: {
  children: React.ReactNode;
  company: React.ReactNode;
}) {
  return (
    <section className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
      <Flex gap={100}>
        <Flex flex={2} vertical>
          {children}
        </Flex>
        <Flex flex={1}>{company}</Flex>
      </Flex>
    </section>
  );
}
