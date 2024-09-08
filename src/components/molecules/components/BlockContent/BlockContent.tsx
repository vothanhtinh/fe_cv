type TBlockContentProps = {
  children: React.ReactNode;
  title: string;
};
export const BlockContent = (props: TBlockContentProps) => {
  const { title, children } = props;

  return (
    <div className=' rounded-[10px] w-full '>
      <div className='flex flex-col '>
        <div className='px-2 flex items-center w-full text-white text-[16px]  font-bold bg-[linear-gradient(90deg,#1c4742,#22c96d)] h-[50px] rounded-tl-[10px] rounded-tr-[10px]'>
          {title}
        </div>
        <div className='bg-white text-[#595959] text-sm leading-1	 p-2 rounded-bl-[10px] rounded-br-[10px] '>
          {children}
        </div>
      </div>
    </div>
  );
};
