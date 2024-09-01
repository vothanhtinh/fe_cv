import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes((locale as 'en') || 'vi')) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
