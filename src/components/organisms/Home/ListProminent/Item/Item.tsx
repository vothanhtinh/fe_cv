import { Flex } from 'antd';

type TITem = {
  id: number;
  title: string;
  total: number;
};

export const Item = (props: TITem) => {
  const { title, total } = props;

  return (
    <div>
      <a
        className='block rounded-xl border border-green-500 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10'
        href='#'
      >
        <Flex className='items-center' gap={10}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-10 text-green-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M12 14l9-5-9-5-9 5 9 5z' />
            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
            />
          </svg>

          <h2 className='text-xl font-medium text-black'>{title}</h2>
        </Flex>
        <p className='mt-1 text-sm text-green-500 text-center'>
          {total.toLocaleString()} việc làm
        </p>
      </a>
    </div>
  );
};
