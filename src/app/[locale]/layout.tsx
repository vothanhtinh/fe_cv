import '@/styles/globals.css';

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

import { MainProvider } from '@/components/providers/MainProvider';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Trang chủ',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(inter.variable, 'font-primary scrollbar')}
        suppressHydrationWarning
        style={{
          height: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <MainProvider>{children}</MainProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
