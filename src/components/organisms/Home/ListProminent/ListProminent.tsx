import { Item } from './Item';

export const ListProminent = () => {
  const data = [
    {
      id: 1,
      title: 'Kinh doanh / Bán hàng',
      total: 10000,
    },
    {
      id: 2,
      title: 'Kinh doanh / Bán hàng',
      total: 10000,
    },
    {
      id: 3,
      title: 'Kinh doanh / Bán hàng',
      total: 10000,
    },
    {
      id: 4,
      title: 'Kinh doanh / Bán hàng',
      total: 10000,
    },
    {
      id: 6,
      title: 'Kinh doanh / Bán hàng',
      total: 10000,
    },
  ];

  return (
    <section className='bg-white text-black dark:bg-gray-900 '>
      <div className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-green-500 text-3xl font-bold sm:text-4xl'>
            Ngành nghề nổi bật
          </h2>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
