import { Skeleton } from 'antd';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
      <Skeleton
        active
        loading
        paragraph={{
          rows: 20,
        }}
        className='w-full'
      />
    </section>
  );
}
