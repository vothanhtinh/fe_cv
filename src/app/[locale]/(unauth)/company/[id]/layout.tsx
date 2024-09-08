export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-[#f4f5f5]'>
      {children}
    </div>
  );
}
