import { Menu } from 'antd';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
];
// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <Fragment>
      <div className={wrapperStyles}>
        <Menu items={items} mode='horizontal' />

        <main className='flex-1'>{children}</main>
        <footer className='flex items-center justify-center p-4'>
          ©
          <Link
            href='https://www.linkedin.com/in/mateusz-hadry%C5%9B/'
            className='pr-2'
          >
            Mateusz Hadryś
          </Link>
          Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </Fragment>
  );
};
