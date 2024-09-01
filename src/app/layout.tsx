import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { MainProvider } from '@/components/providers/MainProvider';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Trang chủ',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body
        className={cn(inter.variable, 'font-primary')}
        suppressHydrationWarning
        style={{
          height: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
