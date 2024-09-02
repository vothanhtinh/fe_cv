type TInfoBlock = {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
};
export const InfoBlock = (props: TInfoBlock) => {
  const { title, value, icon } = props;

  return (
    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-4'>
      {icon}

      <div className='mt-1.5 sm:mt-0'>
        <p className='text-sm text-gray-500'>{title}</p>

        <p className='font-medium text-sm tracking-wider	'>{value}</p>
      </div>
    </div>
  );
};
